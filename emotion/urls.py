from django.urls import path, re_path
from . import views 

# namespace
app_name = 'PB'

urlpatterns = [
    re_path('fun',views.fun),
    re_path('sad',views.sad),
    re_path('anger',views.anger),
    re_path('love',views.love),
    re_path('lonely',views.lonely),
    re_path('unrest',views.unrest),
    re_path('result',views.result),
    re_path('final',views.final),

    
]