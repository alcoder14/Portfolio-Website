<script>

    import viewport from "../useViewportAction"

    export let skill

    const skill_percentage = skill.percentage
    let progress = 0, time = 10, interval

    const animate = () =>{
        interval = setInterval(()=>{
        progress += 1;
            if(progress == skill_percentage){
                clearInterval(interval)
            }

        }, time)
    }

    const resetProgress = () =>{
        clearInterval(interval)
        progress = 0
    }


</script>

<div class="skill-container">
    <img src="Images/{skill.logo}" alt="Logo" class="skill-logo">
    <h3 class="skill-title">{skill.name}</h3>
    <div class="skill-bar">
        <div class="skill-percentage" style={`width: ${progress}%`} use:viewport on:enterViewport={animate} on:exitViewport={resetProgress}></div>
    </div>
</div>

<style>
    .skill-container{
        display: grid;
        grid-template-columns: 20% 80%;
        margin: 30px 0;
    }
    .skill-logo{
        grid-row: 1 / span 2;
        height: 100px;
        width: auto;
        justify-self: center;
        align-self: center;
    }
    .skill-title{
        line-height: 0;
        font-size: 30px;
        color: white;
    }

    .skill-bar{
        height: 50px;
        width: 100%;
        background-color: #292929;
        border-radius: 20px;
    }

    .skill-percentage{
        height: inherit;
        width: 0%;
        background-color: #6caafa;   
        border-radius: inherit;
    }
    @media(max-width: 1700px){
        .skill-logo{
            height: 80px;
        }
        .skill-bar{
            height: 40px;
        }
        .skill-container{
            margin: 20px 60px 20px 0;
        }
        .skill-title{
            font-size: 25px;
        }
    }
    @media(max-width: 1200px){
        .skill-logo{
            height: 60px;
        }
        .skill-bar{
            height: 30px;
        }
        .skill-container{
            margin: 20px 60px 20px 0;
        }
        .skill-title{
            font-size: 22px;
        }
    }
    @media(max-width: 850px){
        .skill-logo{
            height: 60px;
        }
        .skill-bar{
            height: 30px;
        }
        .skill-container{
            margin: 20px 20px 20px 0;
            grid-template-columns: auto 80%;
        }
        .skill-title{
            font-size: 22px;
        }
    }
    @media(max-width: 550px){
        .skill-logo{
            height: 50px;
        }
        .skill-bar{
            height: 25px;
        }
        .skill-container{
            margin: 20px 20px 20px 0;
            grid-template-columns: auto 80%;
        }
        .skill-title{
            font-size: 22px;
        }
    }
</style>