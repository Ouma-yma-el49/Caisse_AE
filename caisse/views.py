from django.shortcuts import render

def accueil(request):
    return render(request, 'caisse/index.html')