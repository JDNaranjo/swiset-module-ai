from rest_framework import serializers
from .models import Trade


class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ('id', 'side', 'mood', 'trade_time', 'stop_loss_price',
                  'entry_price', 'close_price', 'pip_value',
                  'risk_percentage', 'monetary_risk', 'asset_name', 'market',
                  'type', 'automated', 'user_type', 'netProfit')


class NetProfitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = ('side', 'mood', 'trade_time', 'stop_loss_price',
                  'entry_price', 'close_price', 'pip_value',
                  'risk_percentage', 'monetary_risk', 'asset_name', 'market',
                  'type', 'automated', 'user_type', 'netProfit')
