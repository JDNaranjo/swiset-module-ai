# Generated by Django 3.2.7 on 2021-11-23 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211122_1736'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trade',
            old_name='actionName',
            new_name='asset_name',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='auto',
            new_name='automated',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='comissions',
            new_name='close_price',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='inputPrice',
            new_name='entry_price',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='operationTime',
            new_name='monetary_risk',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='userType',
            new_name='mood',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='outputPrice',
            new_name='pip_value',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='pipValue',
            new_name='risk_percentage',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='riskPercentage',
            new_name='stop_loss_price',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='stopLossPrice',
            new_name='trade_time',
        ),
        migrations.RenameField(
            model_name='trade',
            old_name='typeTrade',
            new_name='type',
        ),
        migrations.AddField(
            model_name='trade',
            name='netProfit',
            field=models.FloatField(default=False),
        ),
        migrations.AddField(
            model_name='trade',
            name='user_type',
            field=models.CharField(default='', max_length=50),
        ),
    ]