from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=50)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=15)

    def __str__(self):
        return self.name
