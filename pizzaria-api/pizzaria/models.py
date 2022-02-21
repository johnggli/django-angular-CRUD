from django.db import models
from django.contrib.auth.models import User


class Address(models.Model):
    street = models.CharField(max_length=255)
    suite = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=255)


class Client(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
    address = models.OneToOneField(Address, models.CASCADE, related_name='client')


class Manager(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    cpf = models.CharField(max_length=11)
    salary = models.FloatField()


class Employee(models.Model):
    user = models.OneToOneField(User, models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    cpf = models.CharField(max_length=11)
    salary = models.FloatField()
    manager = models.ForeignKey(Manager, on_delete=models.CASCADE, related_name='employees')


class Progress(models.Model):
    name = models.CharField(max_length=255)


class Pizza(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    price = models.FloatField()


class Demand(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(Client, models.CASCADE, related_name='client_demands')
    employee = models.ForeignKey(Employee, models.CASCADE, related_name='employee_demands')
    pizza = models.ForeignKey(Pizza, models.CASCADE, related_name='pizza_demands')
    progress = models.ForeignKey(Progress, models.CASCADE, related_name='progress_demands')
