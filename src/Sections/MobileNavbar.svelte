<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher()

    const scrollDown = ({target}) =>{
        target = target.parentElement
        console.log(target.tagName)
        if(target.tagName.toLowerCase() == "button"){
            target = target.parentElement
        }
        dispatch("scrolldown", {
            target: target
        })
    }
</script>

<section class="mobile-navbar">
    <a href="#header-section"><button on:click|preventDefault={scrollDown}><i class="fa-solid fa-house"></i></button></a>
    <a href="#about-me-section"><button on:click|preventDefault={scrollDown}><i class="fa-solid fa-circle-user"></i></button></a>
    <a href="#skills-section"><button on:click|preventDefault={scrollDown}><i class="fa-solid fa-folder"></i></button></a>
    <a href="#my-projects-section"><button on:click|preventDefault={scrollDown}><i class="fa-solid fa-screwdriver-wrench"></i></button></a>
    <a href="#contact-section"><button on:click|preventDefault={scrollDown}><i class="fa-solid fa-message"></i></button></a>
</section>

<style>
    .mobile-navbar{
        z-index: 50;
        padding: 20px;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 95%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #14335C;
        border: solid #75A4E1 3px;
        border-bottom: none;
    }
    a, i{
        font-size: 40px;
        color: white;
    }
    button{
        background-color: transparent;
        cursor: pointer;
    }
    @media(max-width: 550px){
       a, i{
        font-size: 35px;
       }
    }
    @media(max-width: 450px){
       a, i{
        font-size: 30px;
       }
    }
</style>