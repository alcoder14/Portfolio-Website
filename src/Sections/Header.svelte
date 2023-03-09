<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import SvelteTypedJs from "svelte-typed-js"

    let dispatch = createEventDispatcher();

    const dispatch_scroll = ({target}) =>{
        target = target.parentElement
        dispatch("scrollIntoView", {
            target: target
        })
    }
</script>


<header class="header" id="header-section">
    <nav class="nav">
        <a href="#header-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Home</button></a>
        <a href="#about-me-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">About Me</button></a>
        <a href="#skills-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Skills</button></a>
        <a href="#my-projects-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">My Projects</button></a>
        <a href="#contact-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Contact</button></a>
    </nav>

    <div class="developer">
        <h3>Hey There! I am Aljaž,</h3>
        <SvelteTypedJs strings={["UI-Designer &"]} typeSpeed={50} cursorChar={" "} >
            <h1 class="typing"> </h1>
        </SvelteTypedJs>
        <SvelteTypedJs strings={["Web Developer"]} typeSpeed={50} cursorChar={" "} >
            <h1 class="typing"> </h1>
        </SvelteTypedJs>
    </div>
    <a href="#about-me-section" on:click|preventDefault={dispatch_scroll}><button class="action-btn"> <i class="fa-solid fa-arrow-down"></i> Read More</button></a>

    <i class="fa-solid fa-code"></i>
</header>

<style>
    
    .header{
        background-color: #191919;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 80px 100px;
        position: relative;
    }
    .fa-code{
        position: absolute;
        font-size: 300px;
        color: white;
        bottom: 30%;
        right: 20%;
        color: #292929;
        z-index: 2;
        animation-name: animate-code-icon;
        animation-delay: 1s;
        animation-iteration-count: infinite;
        animation-duration: 12s;
        animation-timing-function: ease-in-out;
    }
    @keyframes animate-code-icon{
        0%{color: #292929;}
        10%{color: #292929;}
        45%{color: #6caafa;}
        55%{color: #6caafa;}
        80%{color: #292929;}
        100%{color: #292929;}
    }

    
    .nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        border-bottom: #6caafa solid 3px;
    }
    .nav-button{
        color: white;
        background-color: transparent;
        font-size: 40px;
        padding: 0;
        margin-right: 40px;
        padding: 5px 5px 15px 0;
        font-size: 40px;
        cursor: pointer;
        transition: background-color 0.4s;
        transition-property: background-color, transform;
    }
    .nav-button:hover{
        /*background-color: #75A4E1;*/
        color: #6caafa;
        transform: scale(1.05);
    }

    h3{
        line-height: 1.0;
        font-size: 50px;
        color: #6caafa;;
        margin-bottom: 30px;
    }
    .typing{
        font-size: 120px;
        color: white;
        line-height: 1.0;
        margin-top: 0;
        margin-bottom: 20px;
    }
    .typing, h3{
        padding: 0;
        margin-left: 0;
    }

    .action-btn{
        padding: 12px 24px;
        background-color: transparent;
        color: white;
        background-color: #6caafa;
        border-radius: 0;
        cursor: pointer;
        border: solid 3px transparent;
        transition: all 0.4s;
    }
    .action-btn:hover{
        background-color: transparent;
        border: solid 3px #6caafa;
        transform: scale(1.1);
    }
    .action-btn:hover .fa-solid{
        animation-duration: 1s;
    }


    .fa-arrow-down, .action-btn{
        font-size: 32px;
    }
    .fa-arrow-down{
        margin-right: 10px;
        animation-name: animate-arrow;
        animation-iteration-count: infinite;
        animation-duration: 1.6s;
    }

    @keyframes animate-arrow{
        0%{transform: translateY(5px);}
        50%{transform: translateY(-5px);}
        100%{transform: translateY(5px);}
    }

    /* Media Queries */

    
    @media(max-width: 1800px){
        .fa-code{
            right: 16%;
        }
    }
    
    @media(max-width: 1650px){
        .header{
            padding: 80px 40px 80px 80px;
        }
        .nav-button{
            font-size: 35px;
            margin-right: 35px;
            padding: 9px 18px;
        }
        .typing{
            font-size: 100px;
        }
        h3{
            font-size: 40px;
        }
        .action-btn{
            padding: 11px 22px;
        }

        .fa-code{
            font-size: 220px;
        }
        .fa-arrow-down, .action-btn{
            font-size: 28px;
        }
    }
    @media(max-width: 1460px){
        .fa-code{
            right: 12%;
            font-size: 180px;
        }
    }
    @media(max-width: 1250px){
        .fa-code{
            right: 10%;
            bottom: 10%;
            font-size: 160px;
        }
        .header{
            padding-top: 45px;
            padding-left: 80px;
            padding-bottom: 100px;
        }
        .nav-button{
            font-size: 30px;
            margin-right: 25px;
            padding: 8px 16px;
        }

        .typing{
            font-size: 120px;
        }
        h3{
            font-size: 55px;
        }

        .action-btn{
            font-size: 26px;
            padding: 10px 20px;
        }
        .fa-arrow-down, .action-btn{
            font-size: 26px;
        }

    }
    @media(max-width: 1070px){
        .header{
            padding-top: 40px;
            padding-left: 60px;
            padding-bottom: 80px;
        }
        .nav-button{
            font-size: 26px;
            margin-right: 20px;
            padding: 7px 14px;
        }

        .action-btn{
            font-size: 24px;
            padding: 8px 16px;
        }
        .fa-arrow-down, .action-btn{
            font-size: 24px;
        }

        .typing{
            font-size: 90px;
        }
        h3{
            font-size: 40px;
        }
    }
    @media(max-width: 900px){
        .fa-code{
            font-size: 140px;
            right: 8%;
        }
    }
    @media(max-width: 850px){
        .header{
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding-top: 30px;
            padding-left: 40px;
            padding-bottom: 50px;
        }
        .nav{
            display: none;
        }
        .fa-code{
            font-size: 130px;
            bottom: 12%;
        }
        .typing{
            font-size: 60px;
            line-height: 1.0;
            margin: none;    
        }

        h3{
            font-size: 25px;
            margin-bottom: 30px;
        }
        .action-btn{
            font-size: 21px;
            padding: 7px 14px;
        }

        .fa-arrow-down, .action-btn{
            font-size: 21px;
        }
    }
    @media(max-width: 600px){
        .fa-code{
            font-size: 80px;
            bottom: 14%;
            right: 20%;
        }
        .header{
            padding: 30px;
        }
        .typing{
            font-size: 50px;
        }
        h3{
            font-size: 20px;
        }
    
    }
    @media(max-width: 450px){
        .fa-code{
            font-size: 60px;
            bottom: 16%;
        }
        .header{
            padding: 25px;
        }
        .typing{
            font-size: 40px;
        }
        h3{
            font-size: 17px;
        }
    
    }
</style>