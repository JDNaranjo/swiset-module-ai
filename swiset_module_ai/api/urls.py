from django.urls import path
from .views import TradeView, NetProfitView

urlpatterns = [
    path('trade/', TradeView.as_view()),
    path('netprofit/', NetProfitView.as_view()),
]
