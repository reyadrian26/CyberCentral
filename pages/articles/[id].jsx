import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ArticleContent from "../../components/Article Content/ArticleContent";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useRouter } from "next/router"; 
import { articleData } from "../../components/Article Content/ArticleContent"; 

const ContentPage = ({ articleData }) => {
  const router = useRouter(); 
  const { id } = router.query;
  
  return (
    <>
      <Navbar />
      <ArticleContent articleData={articleData} articleId={id} />{" "}
      <Subscribe />
      <Footer />
    </>
  );
};


export async function getServerSideProps() {
 
  return {
    props: {
      articleData, 
    },
  };
}

export default ContentPage;
