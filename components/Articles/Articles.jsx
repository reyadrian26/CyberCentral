import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import styles from "../../styles/Articles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { articleData } from "../Article Content/ArticleContent";
import PopularArticles from "./PopularArticles";
import MoreArticles from "./MoreArticles";
import Link from "next/link";
import Image from "next/image";

const Articles = () => {
  const getFirstParagraph = (text) => {
    return text.split("\n")[0];
  };

  return (
    <Container className={styles.articleContainer} id="articles">
      <Grid columns={2} stackable className={styles.articleGrid}>
        <Grid.Row className={styles.gridRow}>
          <Grid.Column className={styles.left}>
            <span className={styles.tag}>
              <p>Featured Article</p>
            </span>
            <Header as="h1">{articleData[0].title}</Header>
            <p className={styles.authorDate}>
              {articleData[0].author} &#x2022; {articleData[0].date}
            </p>
            <p>{getFirstParagraph(articleData[0].text)}</p>

            <Link href={`/articles/0`}>
              <p>
                READ MORE
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </p>
            </Link>
          </Grid.Column>
          <Grid.Column className={styles.right}>
            <Image
              src={articleData[0].image}
              alt="Featured Image"
              width={585}
              height={390}
              className={styles.featuredImg}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <PopularArticles />

      <MoreArticles />
    </Container>
  );
};

export default Articles;
