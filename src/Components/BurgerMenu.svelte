<button class="burger-menu-btn" on:click>
    <i class="fa-solid fa-bars"></i>
</button>

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
    
    .burger-menu-btn:hover{
        cursor: pointer;
    }
    .fa-bars{
        font-size: 40px;
        color: white;
    }
    @media(max-width: 550px){
        .burger-menu-btn{
            top: 18px;
            right: 18px;
        }
    }
</style>