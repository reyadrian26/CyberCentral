import React from "react";
import  Head from "next/head";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import background from "../../assets/hero-bg.png";
import styles from "../../styles/Home.module.scss";
import Image from "next/image";

const Home = () => {
  return (
    <Segment className={styles.background} id="home">
      <Head>
        <title>CyberCentral</title>
      </Head>
      <Image
        src={background}
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <Segment id={styles.home} textAlign="center" vertical>
        <Container text>
          <Header
            as="h1"
            content="Your Gateway to the Latest in Tech Innovation"
            className={styles.heroHeader}
          />

          <Header
            as="h3"
            content="Stay updated with the latest trends and innovations."
            className={styles.heroSubheader}
          />

          <a href="#articles">
            <Button primary className={styles.btnPrimary} size="big">
              Get Started
            </Button>
          </a>
        </Container>
      </Segment>
    </Segment>
  );
};

export default Home;
