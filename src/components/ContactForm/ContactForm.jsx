import React, { useState } from 'react';
import styles from './Contact.module.css';
import { AiOutlineMessage } from "react-icons/ai";       //   imported from react icons (not a local component search this in web)
import Button from '../Button/Button';
import { MdAddIcCall } from "react-icons/md";             //   imported from react icons (not a local component search this in web)
import { MdAttachEmail } from "react-icons/md";          //   imported from react icons (not a local component search this in web)



const ContactForm = () => {

  const [name,setName] = useState("Gourav");
  const [email,setEmail] = useState("kyayrr@gmail.com");
  const [text,setText] = useState("web Developer");

  
  const onSubmit = (events) =>{
    events.preventDefault();
    
    setName(events.target[0].value);
    setEmail(events.target[1].value);
    setText(events.target[2].value);

  }

  return (
    <section className={` ${styles.container}`}>
      <div className={` ${styles.contact_form}`}>
        <div className={styles.top_btn}>


        <Button text="VIA SUPPORT CHAT" icon={ <AiOutlineMessage fontSize="24px" /> }/>

        <Button  text="VIA CALL" icon={ <MdAddIcCall fontSize="24px"/> }/>


        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={ <MdAttachEmail fontSize="24px"/> }/>
        <form  onSubmit={onSubmit}>


          <div className={styles.form_control}>
             <label htmlFor="name">Your Name</label>
             <input type="text" name="name"/>
          </div>


          <div className={styles.form_control}>
             <label htmlFor="email">E-Mail</label>
             <input type="email " name="email"/>
          </div>


          <div className={styles.form_control}>
             <label htmlFor="Text">Text</label>
             <textarea name="Text" rows='6'/>
          </div>
          

          <div className={styles.submit_btn}>
           <Button text="SUBMIT"/>
          </div>

          <div>
            {name + "\n" + email + "\n" + text}
          </div>
        </form>
       </div>
       

      <div className={`${styles.contact_image}`}>
        <img src="/images/character_3.svg" alt="madam" />
      </div>
    </section>
  )
}

export default ContactForm;
