# Generated by Django 3.0.6 on 2020-05-09 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('not order', 'not order'), ('pending', 'pending'), ('out for delivery', 'out for delivery'), ('delivered', 'delivered')], default='not order', max_length=100),
        ),
    ]
