# Generated by Django 3.1.2 on 2021-12-24 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0009_remove_trip_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='balance',
            field=models.FloatField(default=9999.0),
        ),
    ]