# Generated by Django 3.1.2 on 2022-01-04 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_auto_20220104_0806'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='hes_code_value',
            field=models.CharField(default='', max_length=12),
        ),
    ]
