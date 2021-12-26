# Generated by Django 3.1.2 on 2021-12-26 12:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0010_customuser_balance'),
    ]

    operations = [
        migrations.CreateModel(
            name='CarPooling',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('groupName', models.CharField(max_length=255)),
                ('wplink', models.CharField(max_length=255)),
                ('creator_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='creator', to=settings.AUTH_USER_MODEL)),
                ('member_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='traveller1', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
