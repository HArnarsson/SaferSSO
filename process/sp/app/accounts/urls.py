# urls.py
from django.urls import path
from .views import OIDCTokenView, UserInfoView

urlpatterns = [
    path('token/oidc/', OIDCTokenView.as_view(), name='oidc_token'),
    path('user/info/', UserInfoView.as_view(), name='user-info'),
]
