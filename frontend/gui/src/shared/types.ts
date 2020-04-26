import { themes } from "./themes";

export type DBArticle = {
  id: number;
  title: string;
  starter?: string;
  content: string;
  theme: keyof typeof themes;
  publish_date: Date;
  reading_time: number;
  views_amount: number;
};

export type DBArticleImage = {
  id: number;
  article: number;
  image_file: string;
  is_main: boolean;
  brightness: number;
};

export type ArticleProps = {
  article: DBArticle;
  articleImages: Array<DBArticleImage>;
};

export type StyledArticleHeaderImagerProps = {
  src: string;
  brightness: number;
};

export type LoadedImage = {
  article: number;
  image_file: File;
};

export type ArticleCardProps = {
  id: number;
  image: string;
  brightness: number;
  theme: string;
  title: string;
  views_amount: number;
  reading_time: number;
  publish_date: Date;
};

export type ArticleSlideProps = {
  id: number;
  image: string;
  brightness: number;
  theme: string;
  title: string;
  views_amount: number;
  reading_time: number;
  publish_date: Date;
};

export type StyledArticleContentWrapperProps = {
  editor?: boolean;
};

export type StyledArticleCardImgProps = {
  src: string;
  brightness: number;
};

export type StyledArticleSlideImgProps = {
  src: string;
  brightness: number;
};

export type ArticleListProps = {
  mainImages: Array<DBArticleImage>;
  articles: Array<DBArticle>;
  filter: string;
};

export type HeaderProps = {
  callback: (filterValue: string) => void;
};

export type SecondHeaderProps = {
  callback: (filterValue: string) => void;
};
