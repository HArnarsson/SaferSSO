from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField("Name", max_length=30)
    email = models.EmailField()
    