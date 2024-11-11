# accounts/views.py
from django.shortcuts import render, redirect
from .forms import RegistrationForm, ProfileUpdateForm
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required

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

@login_required
def profile_view(request):
    # You can pass user-specific data to the template if needed
    return render(request, 'profile.html', {'user': request.user})


@login_required
def profile_update(request):
    if request.method == 'POST':
        form = ProfileUpdateForm(request.POST, instance=request.user)
        if form.is_valid():
            form.save()
            return redirect('profile')  # Redirect to the profile page after successful update
    else:
        form = ProfileUpdateForm(instance=request.user)

    return render(request, 'profile_update.html', {'form': form})

