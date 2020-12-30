import React from 'react';
import styles from './formcontrol.module.css';

export const InputText=({input,meta,...props})=>{
  const hasError=meta.error&&meta.touched;
  return (<div className={styles.formControl+" "+(hasError?styles.error:"")}>
      <div><input {...input} {...props}/></div>
      <span>{hasError&& meta.error}</span>
    </div>
  )
}
