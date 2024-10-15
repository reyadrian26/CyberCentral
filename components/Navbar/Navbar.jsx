import React, { useState } from "react";
import { MenuItem, Menu, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/Navbar.module.scss';

const Navbar = () => {
  const [activeItem] = useState(null);

  const handleMenuClick = () => {
    const navbar = document.querySelector(`.${styles.navList}`);
    navbar.classList.toggle(`${styles.active}`);
  };

  return (
    <Segment className={styles.navbarContainer}>
      <Menu borderless className={styles.menu}>
        <Menu.Menu position="left" >
          <MenuItem active={activeItem === "home"}>
            <span className={styles.span1}>Cyber </span>
            <span className={styles.span2}>Central</span>
          </MenuItem>
        </Menu.Menu>

        <FontAwesomeIcon
          icon={faBarsStaggered}
          id="menu-icon"
          onClick={handleMenuClick}
          className={styles.menuicon}
        />

        <Menu.Menu position="right" className={styles.navList}>
          <a href="#home" className={styles.anchor}>
            <Menu.Item name="home" active={activeItem === "home"} className={styles.item}>
              Home
            </Menu.Item>
          </a>

          <a href="#articles" className={styles.anchor} >
            <MenuItem
              name="articles"
              active={activeItem === "articles"}
              className={styles.item}
            ></MenuItem >
          </a>

          <a href="#about-us" className={styles.anchor}>
            <MenuItem name="about-us" active={activeItem === "about-us"} className={styles.item}>
              About
            </MenuItem>
          </a>

          <a href="#contact" className={styles.anchor}>
            <MenuItem name="contact" active={activeItem === "contact"} className={styles.item}> 
              Subscribe
            </MenuItem>
          </a>
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;
