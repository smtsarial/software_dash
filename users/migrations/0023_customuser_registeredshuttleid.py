# Generated by Django 3.1.2 on 2022-01-08 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0022_auto_20220108_0523'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='registeredShuttleId',
            field=models.IntegerField(default=0),
        ),
    ]