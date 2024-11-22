import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Generate a unique UID for each user
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    
    # Make username and email non-unique
    username = models.CharField(max_length=150, unique=False)
    email = models.EmailField(max_length=254, unique=False)

    # Add the 'sub' field
    sub = models.CharField(max_length=255, blank=True, null=True)

    # Specify the unique identifier for authentication
    USERNAME_FIELD = 'uid'

    favorite_color = models.CharField(max_length=255, unique=False, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    profession = models.CharField(max_length=255, unique=False, blank=True, null=True)

    def __str__(self):
        return self.username

