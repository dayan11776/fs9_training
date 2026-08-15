from django.urls import path
from .views import product_list, get_product_data, register_user,create_xendit_payment,xendit_webhook,list_user_orders
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('products/', product_list, name='product_list'),
    path("products/<int:pk>/", get_product_data, name="product_data"),
    path("register/", register_user, name="register"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('checkout/xendit/',create_xendit_payment, name="create_xendit_payment"),
    path('webhook/xendit/',xendit_webhook, name="create_webhook"),
    path('orders/',list_user_orders, name="orders"),
]
