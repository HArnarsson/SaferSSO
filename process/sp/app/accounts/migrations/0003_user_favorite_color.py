# Generated by Django 5.1 on 2024-11-21 23:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_sub_user_uid_alter_user_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='favorite_color',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
