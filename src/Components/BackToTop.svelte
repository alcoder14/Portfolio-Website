<script>
    import { fade } from "svelte/transition";
    import { scale } from "svelte/transition";

    console.log("here")
</script>


<a href="#header-section" transition:fade class="top-btn" on:click|preventDefault><i transition:scale class="fa-solid fa-arrow-up"></i></a>


<style>
    .top-btn{
        z-index: 10;
        position: fixed;
        bottom: 50px;
        right: 50px;
        background-color: #191919;
        padding: 16px;
        font-size: 36px;
        color: #6caafa;
        border-bottom: 3px solid #75a4e1;
        transition: all 0.2s;
    }
    a, i{
        line-height: 0.8;
    }
    .top-btn:hover{
        transform: scale(1.1);
    }
    @media(max-width: 850px){
        .top-btn{
            bottom: 40px;
            right: 40px;
        }
    }
    @media(max-width: 550px){
        .top-btn{
            bottom: 18px;
            right: 18px;
            font-size: 30px;
        }
    }
</style>