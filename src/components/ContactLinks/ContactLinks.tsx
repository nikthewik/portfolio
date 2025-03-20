// Libraries
import React from "react";
// Styles
import styles from "./ContactLinks.module.css";
// Icons
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineCommandLine,
  HiOutlineCamera,
} from "react-icons/hi2";

function ContactLinks(): React.ReactElement {
  return (
    <div className={styles.contactContainer}>
      <span className={styles.subtitle}>Contact Links</span>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <span>LinkedIn</span>
          <a href={`https://www.linkedin.com/in/nikthewik/`} target="_blank">
            <HiOutlineChatBubbleLeftRight className={styles.icon} />
          </a>
        </div>
        <div className={styles.linkContainer}>
          <span>GitHub</span>
          <a href={`https://github.com/nikthewik`} target="_blank">
            <HiOutlineCommandLine className={styles.icon} />
          </a>
        </div>
        <div className={styles.linkContainer}>
          <span> Other Works</span>
          <a href={`https://www.youtube.com/@nikthewik`} target="_blank">
            <HiOutlineCamera className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
