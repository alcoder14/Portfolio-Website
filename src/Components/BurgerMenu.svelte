<script>
    export let show_close_btn = false
</script>

{#if !show_close_btn}
<button class="burger-menu-btn" on:click>
    <i class="fa-solid fa-bars"></i>
</button>
{:else}
<button class="burger-menu-btn bright-color" on:click>
    <i class="fa-solid fa-xmark"></i>
</button>
{/if}

<style>
    .burger-menu-btn{
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
    .bright-color{
        background-color: #292929;
    }
    .burger-menu-btn:hover{
        cursor: pointer;
    }
    .fa-bars{
        font-size: 40px;
        color: white;
    }
    .fa-xmark{
        color: #6caafa;
        font-size: 40px;
    }
    @media(max-width: 550px){
        .burger-menu-btn{
            top: 18px;
            right: 18px;
        }
    }
</style>