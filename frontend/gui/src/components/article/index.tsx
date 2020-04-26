import React, { useEffect, useState } from "react";
import {
  fetchArticleById,
  fetchAllImages,
  incrementArticleViews,
} from "../../api";
import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { DBArticle, DBArticleImage } from "../../shared/types";

export const Article = (props: any) => {
  const articleId = Number(props.match.params.id);
  const [article, setArticle] = useState<DBArticle>();
  const [articleImages, setArticleImages] = useState<Array<DBArticleImage>>([]);

  useEffect(() => {
    fetchArticleById(articleId).then((article: DBArticle) => {
      incrementArticleViews(article);
      setArticle(article);
    });
    fetchAllImages().then((images: Array<DBArticleImage>) => {
      const imagesWithKeys: any = images
        .filter((image) => image.article === articleId)
        .map((image) => ({ ...image, key: image.id }));
      setArticleImages(imagesWithKeys);
    });
  }, []);

  if (articleImages.length === 0 || article === undefined) {
    return <p>loading..</p>;
  }

  return (
    <React.Fragment>
      <ArticleHeader article={article} articleImages={articleImages} />
      <ArticleContent article={article} articleImages={articleImages} />
    </React.Fragment>
  );
};

export default Article;
