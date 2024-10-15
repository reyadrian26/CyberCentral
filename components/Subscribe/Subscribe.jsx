import React, { useState } from "react";
import { Container, Form, Grid, Segment, Button } from "semantic-ui-react";
import emailjs from "@emailjs/browser";
import styles from '../../styles/Subscribe.module.scss';

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sd4ei4s",
        "template_t58l49r",
        {
          to_email: email,
          recipient: email,
        },
        "o1drqM-YxO4o2QNxa"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);

        window.alert(
          "Subscription successful! Check your email for confirmation."
        );
      })
      .catch((error) => {
        console.error("Email send failed:", error);

        window.alert("Subscription failed. Please try again later.");
      });

    setEmail("");
  };

  return (
    <Segment vertical id="contact" className={styles.contact}>
      <Container className={styles.subscribeContainer}>
        <Grid stackable className={styles.subscribeContainer} >
          <Grid.Row>
            <Grid.Column width={8} className={styles.eightWide}>
              <Segment className={styles.leftSide}>
                <h2 className={styles.h2}>BE UPDATED</h2>
                <p className={styles.updates}>
                  Get the latest articles by subscribing to our newsletter.
                </p>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Form onSubmit={handleSubmit} >
                <Form.Group className={styles.subscribeForm}>
                  <Form.Input className={styles.inputField}
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button primary type="submit" className={styles.subBtn}>
                    Subscribe
                  </Button>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Subscribe;
