# Generated by Django 3.0.5 on 2020-04-08 19:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0008_auto_20200217_1214'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='publish_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 8, 22, 15, 57, 754145)),
        ),
        migrations.AlterField(
            model_name='articleimage',
            name='image_file',
            field=models.ImageField(upload_to=''),
        ),
    ]