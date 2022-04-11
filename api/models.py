from django.db import models

class Post(models.Model):
  question = models.CharField(max_length=4000, blank=False)
  answer = models.CharField(max_length=4000, blank=False)

  def __str__(self):
    return self.question