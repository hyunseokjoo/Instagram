from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from .serializers import SignupSerializer

class SignupView(CreateAPIView):
     model = get_user_model() # settings.AUTH_USER_MODEL를 가져옴 //accounts/user
     serializer_class = SignupSerializer
     permission_classes = [
         AllowAny,
     ]




