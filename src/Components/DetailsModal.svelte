<script>
    import { createEventDispatcher } from "svelte";
    import { fade, scale } from "svelte/transition";

    export let title = "demo"
    export let description = "demo description"

    let dispatch = createEventDispatcher()

    const xmark_click = () =>{
        dispatch("closeModal")
    }
</script>

<div class="modal-container" transition:fade>
    <div class="modal-window" transition:scale>
        <div class="close-container">
            <button on:click={xmark_click} class="close-btn"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <h2 class="modal-title">{title}</h2>
        <div class="line"></div>
        <p class="modal-description">{description}</p>
    </div>
</div>

<style>
    .modal-container{
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        z-index: 60;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-window{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #191919;
        color: white;
        padding: 25px;
        border-bottom: 5px solid #6caafa;
    }
    .close-container{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        width: 100%;
    }
    .line{
        background-color: #6caafa;
        width: 50%;
        height: 5px;
        border-radius: 10px;
        transform-origin: center;
        animation-name: line-animation;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
    }
    @keyframes line-animation{
        from{transform: scale(0);}
        to{transform: scale(1);}
    }


    i{
        padding: 0;
        margin: 0;
        line-height: 0.7;
    }
    .close-btn{
        font-size: 38px;
        background-color: transparent;
        cursor: pointer;
        transition: all 0.4s;
        border-radius: 10px;
        padding: 12px;
        line-height: 0.7;
        color: #6caafa;
    }
    .close-btn:hover{
        color: #6caafa;
        background-color: #292929;

    }

    .modal-title{
        font-size: 40px;
    }
    .modal-description{
        font-size: 30px;
        text-align: center;
    }

    @media(max-width: 1500px){
        .line{
            width: 60%;
        }
    }
    @media(max-width: 1200px){
        .line{
            width: 70%;
        }
        .modal-window{
            width: 75%;
        }
    }
    @media(max-width: 850px){
        .line{
            width: 70%;
        }
        .modal-window{
            width: 100%;
            height: 100%;
            border-radius: 0;
            border: none;
            align-items: center;
            justify-content: center;
        }
    }
</style>