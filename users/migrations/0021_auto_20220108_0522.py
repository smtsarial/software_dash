# Generated by Django 3.1.2 on 2022-01-08 10:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_auto_20220108_0512'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='car_type',
            field=models.CharField(max_length=15, null=True),
        ),
    ]
