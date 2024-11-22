import uuid
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Generate a unique UID for each user
    uid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    
    # Make username and email non-unique
    username = models.CharField(max_length=150, unique=False)
    email = models.EmailField(max_length=254, unique=False)

    # Add 'favorite_color' field
    favorite_color = models.CharField(max_length=50, blank=True, null=True)

    # Add the 'sub' field
    sub = models.CharField(max_length=255, blank=True, null=True)

    # Specify the unique identifier for authentication
    USERNAME_FIELD = 'uid'


    def __str__(self):
        return self.username

