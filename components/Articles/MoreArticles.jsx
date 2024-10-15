import React from "react";
import {
  ItemMeta,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Item,
  Header,
} from "semantic-ui-react";

import styles from "../../styles/Articles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { articleData } from "../Article Content/ArticleContent";
import Link from "next/link";
import Image from "next/image";

const MoreArticles = () => {
  const cutText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return (
    <ItemGroup className={styles.moreArticles}>
      <Header as="h1" className={styles.itemHeader}>
        More Articles
      </Header>
      <Item className={styles.item}>
        <Image
          size="tiny"
          src={articleData[5].image}
          className={styles.itemImage}
        />
        <ItemContent className={styles.itemContent}>
          <ItemHeader className={styles.itemTitle}>
            {articleData[5].title}
          </ItemHeader>
          <ItemMeta
            className={styles.itemMeta}
          >{`${articleData[5].author} • ${articleData[5].date} `}</ItemMeta>
          <ItemDescription className={styles.itemDescription}>
            {cutText(articleData[5].text, 200)}
          </ItemDescription>
          <ItemExtra>
            <Link href={`/articles/5`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </ItemExtra>
        </ItemContent>
      </Item>
      <Item className={styles.item}>
        <Image
          size="tiny"
          src={articleData[6].image}
          className={styles.itemImage}
        />
        <ItemContent className={styles.itemContent}>
          <ItemHeader className={styles.itemTitle}>
            {articleData[6].title}
          </ItemHeader>
          <ItemMeta
            className={styles.itemMeta}
          >{`${articleData[6].author} • ${articleData[6].date} `}</ItemMeta>
          <ItemDescription className={styles.itemDescription}>
            {cutText(articleData[6].text, 200)}
          </ItemDescription>
          <ItemExtra>
            <Link href={`/articles/6`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </ItemExtra>
        </ItemContent>
      </Item>
      <Item className={styles.item}>
        <Image
          size="tiny"
          src={articleData[7].image}
          className={styles.itemImage}
        />
        <ItemContent className={styles.itemContent}>
          <ItemHeader className={styles.itemTitle}>
            {articleData[7].title}
          </ItemHeader>
          <ItemMeta
            className={styles.itemMeta}
          >{`${articleData[7].author} • ${articleData[7].date} `}</ItemMeta>
          <ItemDescription className={styles.itemDescription}>
            {cutText(articleData[7].text, 200)}
          </ItemDescription>
          <ItemExtra>
            <Link href={`/articles/7`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </ItemExtra>
        </ItemContent>
      </Item>
      <Item className={styles.item}>
        <Image
          size="tiny"
          src={articleData[8].image}
          className={styles.itemImage}
        />
        <ItemContent className={styles.itemContent}>
          <ItemHeader className={styles.itemTitle}>
            {articleData[8].title}
          </ItemHeader>
          <ItemMeta
            className={styles.itemMeta}
          >{`${articleData[8].author} • ${articleData[8].date} `}</ItemMeta>
          <ItemDescription className={styles.itemDescription}>
            {cutText(articleData[8].text, 200)}
          </ItemDescription>
          <ItemExtra>
            <Link href={`/articles/8`}>
              Read more
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </Link>
          </ItemExtra>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export default MoreArticles;
