# accounts/views.py
from django.shortcuts import render, redirect
from .forms import RegistrationForm
from django.contrib.auth import login

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])  # Hash the password
            user.save()
            login(request, user)  # Log the user in after registration
            return redirect('/accounts/login')  # Redirect to the home page or dashboard
    else:
        form = RegistrationForm()
    return render(request, 'register.html', {'form': form})
