# Generated by Django 3.1.2 on 2022-01-04 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_customuser_hes_code_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='carpooling',
            name='ppp',
            field=models.FloatField(default=0),
        ),
    ]
