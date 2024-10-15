import React from "react";
import {
  Segment,
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Header,
} from "semantic-ui-react";

import styles from "../../styles/Articles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { articleData } from "../Article Content/ArticleContent";
import Link from "next/link";
import Image from "next/image";

const PopularArticles = () => {
  const cutText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const formatWithoutYear = (dateString) => {
    const dateParts = dateString.split(" ");
    const month = dateParts[0];
    const day = dateParts[1].replace(",", "");
    return `${month} ${day}`;
  };

  return (
    <Segment className={styles.popularDiv}>
      <Header as="h1" className={styles.popularHeader}>
        Popular Stories
      </Header>
      <Card.Group className={styles.cards}>
        <Card className={styles.card}>
          <Image
            src={articleData[1].image}
            wrapped
            ui={false}
            className={styles.articleImage}
          />
          <CardContent>
            <CardMeta>
              <span className={styles.date}>
                {articleData[1].author} &#x2022;{" "}
                {formatWithoutYear(articleData[1].date)}
              </span>
            </CardMeta>
            <CardHeader className={styles.articleHeader}>
              {articleData[1].title}
            </CardHeader>

            <CardDescription className={styles.articleDescription}>
              {cutText(articleData[1].text, 100)}
            </CardDescription>
          </CardContent>
          <CardContent extra className={styles.articleExtra}>
            <Link href={`/articles/1`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />{" "}
            </Link>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <Image
            src={articleData[2].image}
            wrapped
            ui={false}
            className={styles.articleImage}
          />
          <CardContent>
            <CardMeta>
              <span className={styles.date}>
                {articleData[2].author} &#x2022;{" "}
                {formatWithoutYear(articleData[2].date)}
              </span>
            </CardMeta>
            <CardHeader className={styles.articleHeader}>
              {articleData[2].title}
            </CardHeader>

            <CardDescription className={styles.articleDescription}>
              {cutText(articleData[2].text, 100)}
            </CardDescription>
          </CardContent>
          <CardContent extra className={styles.articleExtra}>
            <Link href={`/articles/2`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <Image
            src={articleData[3].image}
            wrapped
            ui={false}
            className={styles.articleImage}
          />
          <CardContent>
            <CardMeta>
              <span className={styles.date}>
                {articleData[3].author} &#x2022;{" "}
                {formatWithoutYear(articleData[3].date)}
              </span>
            </CardMeta>
            <CardHeader className={styles.articleHeader}>
              {articleData[3].title}
            </CardHeader>

            <CardDescription className={styles.articleDescription}>
              {cutText(articleData[3].text, 100)}
            </CardDescription>
          </CardContent>
          <CardContent extra className={styles.articleExtra}>
            <Link href={`/articles/3`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <Image
            src={articleData[4].image}
            wrapped
            ui={false}
            className={styles.articleImage}
          />
          <CardContent>
            <CardMeta>
              <span className={styles.date}>
                {articleData[4].author} &#x2022;{" "}
                {formatWithoutYear(articleData[4].date)}
              </span>
            </CardMeta>
            <CardHeader className={styles.articleHeader}>
              {articleData[4].title}
            </CardHeader>

            <CardDescription className={styles.articleDescription}>
              {cutText(articleData[4].text, 100)}
            </CardDescription>
          </CardContent>

          <CardContent extra className={styles.articleExtra}>
            <Link href={`/articles/4`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </CardContent>
        </Card>
      </Card.Group>
    </Segment>
  );
};

export default PopularArticles;
