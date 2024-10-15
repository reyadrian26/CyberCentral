import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <Segment inverted vertical className={styles.footer}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={5}>
              <h4 className={styles.myHeading}>CyberCentral</h4>
              <p className={styles.pFooter}>
                Explore cutting-edge advancements, insightful analyses, and
                industry trends at CyberCentral, your gateway to staying
                informed and inspired in the dynamic world of technology.
              </p>
              <p className={styles.pFooter}>
                &copy; {new Date().getFullYear()} Rey Adrian | All Rights
                Reserved
              </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <h4>Contact Us</h4>
              <p className={styles.pFooter}>Email: cybercentral@gmail.com</p>
              <p className={styles.pFooter}>Phone: 123-456-7890</p>
            </Grid.Column>
            <Grid.Column width={4} className={styles.socials}>
              <h4>Follow Us</h4>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={styles.socialsIcon}
                />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.socialsIcon}
                />
              </a>
              <a href="https://www.instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialsIcon}
                />
              </a>
            </Grid.Column>

            <Grid.Column width={3}>
              <h4>Explore</h4>
              <ul className={styles.footerLinks}>
                <li className={styles.li}>
                  <a href="#home" className={styles.anchor}>
                    Home
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#about-us" className={styles.anchor}>
                    About
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#articles" className={styles.anchor}>
                    Articles
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="#contact" className={styles.anchor}>
                    Contact
                  </a>
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
