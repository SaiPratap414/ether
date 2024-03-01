// LoadingScreen.tsx
import React from "react";
import styles from "./LoadingScreen.module.css";


const LoadingScreen = () => {
  return (
    <div className={styles.loadContainer}>
      <img
          className={styles.loadParentChild}
          loading="eager"
          alt=""
          src="/group-3-2.svg"
        />
    </div>
  );
};

export default LoadingScreen;
