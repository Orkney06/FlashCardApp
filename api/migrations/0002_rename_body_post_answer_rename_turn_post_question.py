# Generated by Django 4.0.3 on 2022-04-11 05:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='body',
            new_name='answer',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='turn',
            new_name='question',
        ),
    ]