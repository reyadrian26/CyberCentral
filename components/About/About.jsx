import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import aboutImg from "../../assets/about-img-3.jpg";
import styles from '../../styles/About.module.scss';
import Image from 'next/image'; 

const About = () => {
  return (
    <Segment className={styles.aboutContainer} id="about-us">
      <Grid columns={2} stackable>
        <Grid.Row className={styles.aboutGrid}>
          <Grid.Column className={styles.aboutLeft}>
            <h1>About Us</h1>
            <p>
              At CyberCentral, we are passionate about exploring the
              cutting-edge innovations that shape our world. As a dedicated
              platform for technology enthusiasts, we strive to bring you the
              latest insights, trends, and breakthroughs in the ever-evolving
              landscape of technology. From AI and machine learning to
              blockchain and beyond, TrendyTech is your go-to destination for
              staying informed and inspired by the remarkable advancements
              driving our digital future.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Image src={aboutImg} className={styles.aboutImage} width={585} height={400}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default About;
