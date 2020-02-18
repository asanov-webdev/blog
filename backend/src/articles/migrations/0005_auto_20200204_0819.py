# Generated by Django 3.0 on 2020-02-04 05:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0004_auto_20200203_0811'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articleimage',
            name='image',
        ),
        migrations.AddField(
            model_name='articleimage',
            name='image_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='articleimage',
            name='order_in_article',
            field=models.PositiveSmallIntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='article',
            name='publish_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 2, 4, 8, 19, 28, 832142)),
        ),
    ]