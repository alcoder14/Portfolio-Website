<script>
    const year = new Date().getFullYear()   
</script>

<footer>
    <div class="social-media">
        <a href="#1"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/alcoder14"><i class="fa-brands fa-github"></i></a>
    </div>
    <h2 class="made-with">Made with Svelte</h2>
    <h4><span>&copy;</span> {year} Aljaž Lončarič.</h4>
</footer>

<style>
    footer{
        background-color: #292929;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    a, i, span{
        color: #6caafa;
    }
    a, i{
        font-size: 50px;
        margin: 0 10px;
    }
    .made-with{
        color: white;
        font-size: 30px;
        margin: 0;
        margin: 20px;
    }
    h4{
        font-size: 30px;
        color: white;
        margin: 0;
        margin-bottom: 20px;
    }
    @media(max-width: 600px){
        a, i{
            font-size: 35px;
        }
        .made-with, h4{
            font-size: 24px;
        }
    }
</style>