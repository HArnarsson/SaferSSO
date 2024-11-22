# urls.py
from django.urls import path
from .views import OIDCTokenView, DashboardView, UpdateDashboardView

urlpatterns = [
    path('token/oidc/', OIDCTokenView.as_view(), name='oidc_token'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    path('dashboard/update/', UpdateDashboardView.as_view(), name='update_dashboard'),
]
