# Generated by Django 3.0.6 on 2020-05-11 17:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_auto_20200511_1257'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shipping_info',
            name='city',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='shipping_info',
            name='pincode',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='shipping_info',
            name='state',
            field=models.CharField(max_length=100, null=True),
        ),
    ]