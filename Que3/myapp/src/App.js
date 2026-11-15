import React from 'react';
import './style.css';
import styles from "./Box.module.css";

function App(){
  return(
  <div style = {{margin: "30px" }}>
    <h2 className="title"> 1. CSS Stylesheet</h2>

    <p style={{color: "red", fontSize: "20px", backgroundColor:"yellow"}}>2.Inline Styling</p>

    <div className={styles.box}>3. CSS Module</div>
  </div>
  );
}

export default App;