<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher()
    let show_close_btn = true

    let navbar_closing = false
    let navbar_opening = true

    const animate_close = () =>{
        navbar_opening = false
        navbar_closing = true
    }

    const dispatch_close = () =>{

        animate_close()
        dispatch("close")
        setTimeout(() => {
            navbar_closing = false
            navbar_opening = true
        }, 1000);
    }

    const dispatch_scroll = ({target}) =>{

        animate_close()
        target = target.parentElement
        dispatch("scrollIntoView", {
            target: target
        })
        setTimeout(() => {
            navbar_closing = false
            navbar_opening = true
        }, 1000);  
    }

</script>

<div class="navbar-container">
    <div class="navbar-window" class:opening={navbar_opening} class:closing={navbar_closing}>
        
        <div class="close-container">
            <button on:click={dispatch_close} class="close-button" ><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div class="nav-buttons-container">
            <a href="#header-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Home</button></a>
            <a href="#about-me-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">About Me</button></a>
            <a href="#skills-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Skills</button></a>
            <a href="#my-projects-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">My Projects</button></a>
            <a href="#contact-section" on:click|preventDefault={dispatch_scroll}><button class="nav-button">Contact</button></a>
        </div>
    </div>
</div>

<style>

    /* CONTAINER + WINDOW */

    .navbar-container{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1000;
    }
    .navbar-window{
        height: 100%;
        width: 50%;
        background-color: #191919;
        position: absolute;
        right: 0;
        border-left: solid 3px #6caafa;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }


    /* ANIMATION */

    .opening, .closing{
        animation-duration: 1s;
    }
    .opening{
        animation-name: slide-in-navbar;
    }
    .closing{
        animation-name: slide-out-navbar;
    }
    @keyframes slide-in-navbar{
        0%{transform: translateX(100%);}
        100%{transform: translateX(0);}
    }
    @keyframes slide-out-navbar{
        0%{transform: translateX(0);}
        100%{transform: translateX(100%);}
    }
  
    /* ELEMENTS */

    .close-container{
        width: 100%;
        height: 100px;
        position: absolute;
    }

    .close-button{
        z-index: 10;
        position: fixed;
        top: 40px;
        right: 40px;
        background-color: #191919;
        height: 58px;
        width: 54px;
        transition: all 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    
    .close-button:hover{
        cursor: pointer;
        background-color: #6caafa;
    }
    .fa-xmark{
        font-size: 40px;
        color: white;
    }
    @media(max-width: 550px){
        .close-button{
            top: 18px;
            right: 18px;
        }
    }


    .nav-buttons-container{
        width: 100%;
        position: absolute;
        top: 150px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    a{
        width: inherit;
        cursor: pointer;
    }
    .nav-button{
        width: inherit;
        background-color: transparent;
        font-size: 25px;
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
        background-color: #292929;
        border-bottom: #6caafa 3px solid;
        text-align: left;
        cursor: pointer;
    }

</style>