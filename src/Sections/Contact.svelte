<script>
    let fname = "", lname = "", email = "", subject = "", message = ""

    const sendMail = async () =>{
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            }, 
            body: JSON.stringify({fname, lname, subject, email, message})
        })

        let response_text = await response.text()
        fname = ""
        lname = ""
        email= ""
        subject = ""
        message = ""

        window.alert(response_text)
    }
</script>

<section class="contact section-padding" id="contact-section">
    <form class="contact-form" on:submit|preventDefault={sendMail}>
        <input type="text" placeholder="First Name" required bind:value={fname}>
        <input type="text" placeholder="Last Name" required bind:value={lname}>
        <input type="email" placeholder="Email Address" required bind:value={email}>
        <input type="text" placeholder="Subject" required bind:value={subject}>
        <textarea class="message" placeholder="Message" required bind:value={message}></textarea>
        <button type="submit">Submit</button>
    </form>
</section>

<style>
    .contact{
        background-color: #292929;
        height: fit-content;
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
            font-size: 24px;
            padding: 9px 18px;
            margin: 10px 0;
        }
        textarea{
            margin-bottom: 20px;
            height: 200px;
        }
        .contact-form{
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
        }
    }
</style>