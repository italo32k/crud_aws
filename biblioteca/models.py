from django.db import models

# Create your models here.

class Book (models.Model):

    id = models.AutoField(primary_key=True),
    autor = models.CharField(max_length=50,null=False)
    titulo = models.CharField(max_length=50,null=False)
    genero = models.CharField(max_length=50,null=False)
    quantidade_paginas = models.IntegerField()
