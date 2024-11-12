# urls.py
from django.urls import path
from .views import OIDCTokenView

urlpatterns = [
    path('token/oidc/', OIDCTokenView.as_view(), name='oidc_token'),
]
