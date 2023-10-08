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
    <div class="language-data-container">
        <img src="Images/{skill.logo}" alt="Logo" class="skill-logo">
        <h3 class="skill-title">{skill.name}</h3>
    </div>
    <div class="skill-bar">
        <div class="skill-percentage" style={`width: ${progress}%`} use:viewport on:enterViewport={animate} on:exitViewport={resetProgress}></div>
    </div>
</div>

<style>
    .skill-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
    .language-data-container{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        padding-bottom: 10px;
    }
    .skill-logo{
        height: 50px;
        width: auto;
        margin-right: 20px;
        align-self: center;
    }
    .skill-title{
        line-height: 0;
        font-size: 40px;
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
        .skill-bar{
            height: 40px;
        }
        .skill-container{
            margin: 20px 60px 20px 0;
        }
        .skill-logo{
            font-size: 35px;
        }
        .skill-title{
            font-size: 25px;
        }
    }
    @media(max-width: 1200px){
        .skill-bar{
            height: 30px;
        }
        .skill-container{
            margin: 20px 60px 20px 0;
        }
    }
    @media(max-width: 850px){
        .skill-logo{
            height: 30px;
        }
        .skill-bar{
            height: 30px;
        }
        .skill-container{
            margin: 0;
            grid-template-columns: auto 80%;
        }
    }
    @media(max-width: 550px){
        .skill-bar{
            height: 25px;
        }
        .skill-container{
            margin: 0;
            grid-template-columns: auto 80%;
        }
        .skill-title{
            font-size: 22px;
        }
    }
</style>