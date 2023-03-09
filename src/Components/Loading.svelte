<script>

    import { createEventDispatcher } from "svelte";
    import { fade, scale } from "svelte/transition";

    let progress = 3
    let dispatch = createEventDispatcher()

    let interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15)
        console.log(progress)

        if((100 - progress) < 20){
            progress += 100 - progress
            clearInterval(interval)

            setTimeout(() => {
                dispatch("progress_finished")
		    }, 300);
        }
    }, 100);

</script>

<div class="loading-container" transition:fade={{duration: 1000}}>
    <h3 class="percentage" transition:scale={{duration: 1200}}> {progress}% </h3>
    <div class="loading-bar" transition:scale={{duration: 1200}}>
        <div class="progress" style={`width: ${progress}%`}></div>
    </div>
</div>

<style>
    .loading-container{
        background-color: #292929;
        z-index: 300;
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .percentage{
        font-size: 50px;
        color: white;
        margin: 0;
        padding: 15px;
    }
    .loading-bar{
        height: 20px;
        width: 30%;
        background-color: #191919;
    }
    .progress{
        height: inherit;
        width: 0;
        background-color: #6caafa;
    }
    @media(max-width: 1600px){
        .loading-bar{
            width: 40%;
            height: 18px;
        }
        .percentage{
            font-size: 46px;
        }
    }
    @media(max-width: 1300px){
        .loading-bar{
            width: 50%;
            height: 16px;
        }
        .percentage{
            font-size: 42px;
        }
    }
    @media(max-width: 1000px){
        .loading-bar{
            width: 60%;
            height: 14px;
        }
        .percentage{
            font-size: 38px;
        }
    }
    @media(max-width: 700px){
        .loading-bar{
            width: 60%;
            height: 12px;
        }
        .percentage{
            font-size: 34px;
        }
    }
</style>