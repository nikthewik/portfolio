// Libraries
import React from "react";
// Styles
import styles from "./MyPhoto.module.css";
// Imgs
import myPhoto from "../../assets/img/my-photo.avif";

function MyPhoto(): React.ReactElement {
  return (
    <span className={styles.container}>
      <img className={styles.photo} src={myPhoto} alt="Pic of me" />
    </span>
  );
}

export default MyPhoto;
