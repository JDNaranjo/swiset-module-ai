from django.db import models
# Create your models here.


class Trade(models.Model):
    side = models.CharField(max_length=4, default="")
    mood = models.CharField(max_length=50, default="")
    trade_time = models.IntegerField(null=False, default=False)
    stop_loss_price = models.FloatField(null=False, default=False)
    entry_price = models.FloatField(null=False, default=False)
    close_price = models.FloatField(null=False, default=False)
    pip_value = models.FloatField(null=False, default=False)
    risk_percentage = models.IntegerField(null=False, default=False)
    monetary_risk = models.IntegerField(null=False, default=False)
    asset_name = models.CharField(max_length=100, default="")
    market = models.CharField(max_length=50, default="")
    type = models.CharField(max_length=4, default="")
    automated = models.CharField(max_length=10, default="")
    user_type = models.CharField(max_length=50, default="")
    netProfit = models.FloatField(null=False, default=False)
