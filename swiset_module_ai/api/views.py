from django.shortcuts import render
from rest_framework import generics, status
from .serializers import TradeSerializer, NetProfitSerializer
from .models import Trade
from rest_framework.views import APIView
from rest_framework.response import Response

import pandas as pd
import joblib

# Create your views here.

reloadModel = joblib.load('api/randomforest.pkl')


class TradeView(generics.ListAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer


class NetProfitView(APIView):

    serializer_class = NetProfitSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            temp = {}
            temp['side'] = serializer.data.get('side')
            temp['mood'] = serializer.data.get('mood')
            temp['trade_time'] = serializer.data.get('trade_time')
            temp['stop_loss_price'] = serializer.data.get('stop_loss_price')
            temp['entry_price'] = serializer.data.get('entry_price')
            temp['close_price'] = serializer.data.get('close_price')
            temp['pip_value'] = serializer.data.get('pip_value')
            temp['risk_percentage'] = serializer.data.get('risk_percentage')
            temp['monetary_risk'] = serializer.data.get('monetary_risk')
            temp['asset_name'] = serializer.data.get('asset_name')
            temp['market'] = serializer.data.get('market')
            temp['type'] = serializer.data.get('type')
            temp['automated'] = serializer.data.get('automated')
            temp['user_type'] = serializer.data.get('user_type')

            dataa = pd.DataFrame({'x': temp}).transpose()
            print(dataa)
            value = reloadModel.predict(dataa)[0]
            print(value)

            temp['netProfit'] = value

            print(temp['mood'])

            trade = Trade(side=temp['side'], mood=temp['mood'], trade_time=temp['trade_time'], stop_loss_price=temp['stop_loss_price'],
                          entry_price=temp['entry_price'], close_price=temp['close_price'], pip_value=temp['pip_value'],
                          risk_percentage=temp['risk_percentage'], monetary_risk=temp['monetary_risk'], asset_name=temp['asset_name'],
                          market=temp['market'], type=temp['type'], automated=temp['automated'], user_type=temp['user_type'],
                          netProfit=temp['netProfit'])

            trade.save()

            return Response(TradeSerializer(trade).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
