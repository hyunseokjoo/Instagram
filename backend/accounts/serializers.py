from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_date):
        user = User.objects.create(validated_date['username'])
        user.set_password(validated_date['password'])
        user.save()
        return user# 암호화하는 로직

    class Meta:
        model = User
        fields = ['pk', 'username', 'password']