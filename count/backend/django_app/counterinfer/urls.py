from django.urls import path
import counterinfer.views as views


urlpatterns = [
    path('counterinfer/', views.Roberta_Predict.as_view(), name = 'api_counterinfer'),
]