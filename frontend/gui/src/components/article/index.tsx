import React, { useEffect, useState } from "react";
import {
  fetchArticleById,
  fetchAllImages,
  incrementArticleViews,
} from "../../api";
import { ArticleContent } from "./ArticleContent";
import { ArticleHeader } from "./ArticleHeader";
import { DBArticle, DBArticleImage } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesAction } from "../../actions";

export const Article = (props: any) => {
  const articleId = Number(props.match.params.id);
  const [article, setArticle] = useState<DBArticle>();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.entity.images);

  useEffect(() => {
    fetchArticleById(articleId).then((article: DBArticle) => {
      incrementArticleViews(article);
      setArticle(article);
    });
    fetchAllImages().then((images: Array<DBArticleImage>) => {
      const imagesWithKeys: any = images
        .filter((image) => image.article === articleId)
        .map((image) => ({ ...image, key: image.id }));
      dispatch(fetchImagesAction(imagesWithKeys));
    });
  }, []);

  if (images.length === 0 || article === undefined) {
    return <p>loading..</p>;
  }

  return (
    <React.Fragment>
      <ArticleHeader article={article} articleImages={images} />
      <ArticleContent article={article} articleImages={images} />
    </React.Fragment>
  );
};

export default Article;
