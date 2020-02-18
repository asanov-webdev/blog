from django.urls import path

from .views import ArticleListView, ArticleDetailView, ArticleImageListView, ArticleUpdateView, ArticleImageCreateView


urlpatterns = [
    path('', ArticleListView.as_view()),
    path('update/<pk>', ArticleUpdateView.as_view()),
    path('<pk>', ArticleDetailView.as_view()),
    path('images/', ArticleImageListView.as_view()),
    path('images/add', ArticleImageCreateView.as_view())
]
