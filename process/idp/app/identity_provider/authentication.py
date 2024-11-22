from django.contrib.auth.backends import BaseBackend
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User

class JWTAuthBackend(BaseBackend):
    def authenticate(self, request, **kwargs):
        jwt_auth = JWTAuthentication()
        try:
            # Authenticate the JWT token
            validated_token = jwt_auth.get_validated_token(request.headers.get('Authorization').split(' ')[1])
            user = jwt_auth.get_user(validated_token)
            return user
        except (AuthenticationFailed, IndexError, AttributeError):
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None
