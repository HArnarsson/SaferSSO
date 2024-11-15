import requests
import os
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated

from .utils import verify_id_token

User = get_user_model()

class OIDCTokenView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        code = request.data.get('code')
        if not code:
            return Response({"error": "Authorization code not provided"}, status=status.HTTP_400_BAD_REQUEST)
        code_verifier = request.data.get('code_verifier')
        if not code_verifier:
            return Response({"error": "Code verifier not provided"}, status=status.HTTP_400_BAD_REQUEST)
        # Exchange code for token with IdP
        token_url = "http://host.docker.internal:8001" + "/auth/token/"  # this is a bit of a hack TODO: fix docker compose and add networks to get around this (and then we can customize urls)
        client_id = os.getenv('SP_CLIENT_ID')
        client_secret = os.getenv('SP_CLIENT_SECRET')
        redirect_uri = os.getenv('REDIRECT_URI')  # Ensure this matches the IdP redirect URI

        # Prepare data for token exchange
        data = {
            "grant_type": "authorization_code",
            "code": code,
            "client_id": client_id,
            "client_secret": client_secret,
            "redirect_uri": redirect_uri,
            "code_verifier": code_verifier,
        }
        
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
        }
        # Make the request to the IdP
        try:
            response = requests.post(token_url, data=data, headers=headers)
            response_data = response.json()

            if response.status_code != 200:
                print(response_data)
                return Response({"error": response_data}, status=status.HTTP_400_BAD_REQUEST)

            id_token = response_data.get("id_token")
            user_info = verify_id_token(id_token)

            email = user_info.get("email")
            # Get or create the user
            user, created = User.objects.get_or_create(email=email)
            if created:
                user.sub = user_info["sub"]
                user.username = email.split('@')[0]
                user.save()

            # Generate Django SimpleJWT tokens
            refresh = RefreshToken.for_user(user)

            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })

        except requests.RequestException as e:
            return Response({"error": "Failed to communicate with IdP"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RevokeTokenView(APIView):
    # TODO finish this 
    permission_classes = [IsAuthenticated]

    def post(self, request):
        refresh_token = request.data.get('refresh_token')
        pass
