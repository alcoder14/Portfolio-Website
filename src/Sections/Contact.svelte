<script>
    import emailjs from '@emailjs/browser';

    let userName = '';
    let userEmail = '';
    let message = '';
  
    const sendEmail =  (e) => {
      console.log(e.target)  
      emailjs.sendForm('service_cnn2tl8', 'template_ouzv9jf', e.target, 'WDgsa08SvMnKaw68H')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            window.alert("Email sent successfully!")
            clearInputs()
        }, (error) => {
            console.log('FAILED...', error.text);
            console.log("There was a problem sending email")
            clearInputs()
        });
    }

  const clearInputs = () => {
    userName = '';
    userEmail = '';
    message = '';
  };
  </script>

<section class="contact section-padding" id="contact-section">
    <form on:submit|preventDefault={sendEmail} class="contact-form">
      <input type="text" name="user_name" placeholder="Name" bind:value={userName}>
      <input type="email" name="user_email" placeholder="Email" bind:value={userEmail}>
      <textarea name="message" placeholder="Message" class="message" bind:value={message}></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
  

<style>
    .contact{
        background-color: #292929;
        height: fit-content;
        padding: 50px;
    }
    .contact-form{
        display: grid;
        grid-template-columns: 42% 42%;
        justify-content: center;
        row-gap: 8%;
        column-gap: 2%;
        margin-bottom: 80px;
    }
    .message{
        grid-row: 1 / span 3;
        grid-column-start: 2;
    }
    input, textarea{
        font-size: 40px;
        padding: 12px 24px;
        outline: none;
        border: none;
        background-color: #191919;
        color: white;
        border-bottom: 3px solid #6caafa;
    }
    textarea{
        resize: vertical;
    }
    
    button{
        background-color: #6caafa;
        color: #14335C;
        padding: 10px;
        font-size: 28px;
        cursor: pointer;
        border-radius: 0;
        border: 5px solid transparent;
        transition: all 0.4s;
    }
    button:hover{
        border: 5px solid #6caafa;
        background-color: transparent;
        color: white;

    }
    button:active{
        transform: translate(0.9s);
    }
    

    input::placeholder, textarea::placeholder{
        color: white;
    }

    /* Media Queries */

    @media(max-width: 1750px){
        input, textarea{
            font-size: 35px;
            padding: 11px 22px;
        }
        .contact-form{
            grid-template-columns: 45% 45%;
        }
    }
    @media(max-width: 1450px){
        input, textarea{
            font-size: 30px;
            padding: 10px 20px;
        }
        .contact-form{
            grid-template-columns: 48% 48%;
        }
    }
    @media(max-width: 1150px){
        input, textarea{
            font-size: 28px;
            padding: 9px 18px;
        }
        .contact-form{
            grid-template-columns: 50% 50%;
        }
    }
    @media(max-width: 950px){
        input, textarea{
            font-size: 20px;
            padding: 5px 12px;
            margin: 10px 0;
        }
        textarea{
            margin-bottom: 20px;
            height: 200px;
        }
        button{
            font-size: 20px;
        }
        .contact-form{
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
        }
    }
</style>