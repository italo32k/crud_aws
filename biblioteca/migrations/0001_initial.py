# Generated by Django 5.1.5 on 2025-01-23 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('autor', models.CharField(max_length=50)),
                ('titulo', models.CharField(max_length=50)),
                ('genero', models.CharField(max_length=50)),
                ('quantidade_paginas', models.IntegerField()),
            ],
        ),
    ]
