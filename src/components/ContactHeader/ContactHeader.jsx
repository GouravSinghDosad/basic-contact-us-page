import React from 'react';
import styles from './ContactHeader.module.css';


const ContactHeader = () => {
  return (
    <div className={` ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ducimus quod 
        harum eligendi quia, qui unde dolor. Voluptates voluptate numquam totam amet accusantium 
        assumenda, corrupti atque officiis, animi, quaerat sed!</p>
    </div>
  );
}

export default ContactHeader;
