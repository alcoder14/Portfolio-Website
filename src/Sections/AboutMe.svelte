<script>
    import {reveal} from "svelte-reveal"
</script>

<section class="about-me section-padding" id="about-me-section">
    <div class="line-1 line">

        <div class="icon-box">
            <i class="fa-solid fa-desktop"></i>
        </div>

        <div class="text-box">
            <p use:reveal> 
                My name is Aljaž and I am 18 year-old developer from Slovenia.
                I started learning programming back in 2020, when I got my hands on C++.
            </p>
            <p use:reveal> 
                Writing simple console programs was fun and all, but something was missing. 
            </p>
        </div>


    </div>
    <div class="line-2 line">

        <div class="text-box">
            <p use:reveal>
                I wanted to create something visually nice and useful at once. 
                So I discovered web development. Over the years I have learnt technologies such
                as HTML, CSS, JavaScript, Python, Sass, ...
                I have built many projects, some of which you can find below.  
            </p>
            <p use:reveal>
                I am also interested in history and listen to rock music.
            </p>
        </div>
        <div class="icon-box">
            <i class="fa-solid fa-computer-mouse"></i>
        </div>

    </div>
</section>

<style>
    .about-me{
        background-color: #292929;
    }
    .line{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .text-box{
        flex-basis: 52%;
        font-size: 32px;
        color: white;
    }
    .icon-box{
        flex-basis: 32%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fa-solid{
        font-size: 200px;
        color: #6caafa;
        transition: all 0.4s;
    }
    .fa-solid:hover{
        transform: scale(1.1);
        color: #191919;
    }

    @media(max-width: 1800px){
        .text-box{
            font-size: 35px;
        }
        .fa-solid{
            font-size: 175px;
        }
    }
    @media(max-width: 1500px){
        .text-box{
            font-size: 30px;
        }
        .fa-solid{
            font-size: 150px;
        }
    }
    @media(max-width: 900px){
        .text-box{
            font-size: 30px;
            flex-basis: 100%;
        }
        .icon-box{
            display: none;
        }
    }
    @media(max-width: 550px){
        .text-box{
            font-size: 28px;
            flex-basis: 100%;
        }
        .icon-box{
            display: none;
        }
    }
</style>