from django.db import models
from datetime import datetime


ARTICLE_THEME_CHOICES = [
    ('LI', 'LITERATURE'),
    ('FI', 'FILMS'),
    ('GA', 'GAMES'),
    ('MU', 'MUSIC'),
    ('NE', 'NEWS')
]


class Article(models.Model):
    title = models.CharField(max_length=120)
    starter = models.TextField(null=True, blank=True)
    content = models.TextField()
    theme = models.CharField(
        max_length=2,
        choices=ARTICLE_THEME_CHOICES,
        default='LI',
        null=True,
        blank=True
    )
    publish_date = models.DateTimeField(default=datetime.now())
    reading_time = models.IntegerField(
        default=5, null=True, blank=True)
    views_amount = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class ArticleImage(models.Model):
    article = models.name = models.ForeignKey(
        'Article', related_name='article', on_delete=models.CASCADE, blank=True, null=True)
    image_file = models.ImageField()
    is_main = models.BooleanField(default=True)
    brightness = models.PositiveSmallIntegerField(default=100)
