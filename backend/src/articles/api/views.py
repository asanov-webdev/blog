from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView

from articles.models import Article, ArticleImage
from .serializers import ArticleSerializer, ArticleImageSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleImageListView(ListAPIView):
    queryset = ArticleImage.objects.all()
    serializer_class = ArticleImageSerializer


class ArticleUpdateView(UpdateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleImageCreateView(CreateAPIView):
    queryset = ArticleImage.objects.all()
    serializer_class = ArticleImageSerializer
