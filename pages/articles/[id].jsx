import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticleContent from "../../components/Article Content/ArticleContent";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import { articleData } from "../../components/Article Content/ArticleContent";

const ContentPage = ({ article }) => {
  return (
    <>
      <Navbar />
      <ArticleContent articleData={article} articleId={article.id} />
      <Subscribe />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const paths = articleData.map((article) => ({
    params: { id: article.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articleData.find((art) => art.id.toString() === params.id);
  return {
    props: {
      article,
    },
  };
}

export default ContentPage;
