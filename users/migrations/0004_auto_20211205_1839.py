# Generated by Django 3.1.2 on 2021-12-05 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20211102_0350'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='latitude',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='customuser',
            name='longitude',
            field=models.FloatField(default=0.0),
        ),
    ]
