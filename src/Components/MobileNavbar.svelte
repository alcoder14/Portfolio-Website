<script>
    import BurgerMenu from "./BurgerMenu.svelte";
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher()
    let show_close_btn = true

    let close_animate = false
    const dispatch_close = () =>{
        //close_animate = true
        dispatch("close")
    }

    const dispatch_scroll = ({target}) =>{
        //close_animate = true
        target = target.parentElement
        dispatch("scrollIntoView", {
            target: target
        })   

    }

</script>

<div class="navbar-container">
    <div class="navbar-window">
        
        <div class="close-container">
            <BurgerMenu on:click={dispatch_close} {show_close_btn} />
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
        animation-name: slide-in-navbar;
        animation-duration: 1s;
    }
    @keyframes slide-in-navbar{
        0%{transform: translateX(100%);}
        100%{transform: translateX(0);}
    }
    /*
    .modal_visible{
        animation-name: slide-out-navbar;
        animation-duration: 1s;
    }
    @keyframes slide-out-navbar{
        0%{transform: translateX(0);}
        100%{transform: translateX(100%);}
    }
    */

    .close-container{
        width: 100%;
        height: 100px;
        position: absolute;
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