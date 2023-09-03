<script>

    import { createEventDispatcher } from "svelte";
    import { each } from "svelte/internal";
    let dispatch = createEventDispatcher()
    
    export let data

    const showModal = () =>{
        dispatch("showModal", {
            title: data.name,
            description: data.description
        })
    }

</script>

<div class="box">
    <i class="fa-solid {data.icon} project-icon"></i>
    <h3 class="project-title">{data.name}</h3>

    <div class="links">
        <a href={data.link} target="_blank" rel="noreferrer"><i class="fa-solid fa-up-right-from-square"></i></a>
        <button on:click={showModal}><i class="fa-solid fa-circle-info"></i></button>
        {#if data.github !== ""}
            <a href={data.github} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        {/if}
    </div>
</div>

<style>
    .box{
       flex-basis: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #191919;
        padding: 30px;
        border-bottom: solid 3px #6caafa;
        transition: all 0.4s;
        margin-bottom: 50px;
    }
    .project-icon{
        font-size: 160px;
        color: #75A4E1;
    }
    .project-title{
        font-size: 40px;
        color: white;
        margin: 20px;
        text-align: center;
    }
    .links{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    button{
        background-color: transparent;
    }
    a, i{
        color: #6caafa;
        font-size: 50px;
        cursor: pointer;
        padding: 10px;
        transition: all 0.4s;
        border-radius: 10px;
        border: solid 3px transparent;
    }
    a:hover i, button:hover i{
        background-color: #6caafa;
        color: #191919;
        border: #292929 solid 3px;
        transform: scale(0.9);
    }
    .project-icon{
        color: #292929;
    }

    /* Media Queries */

    @media(max-width: 1850px){
        .box{
            flex-basis: 23%;
        }
        .links{
            width: 80%;
            border-radius: 30px;
        }
        .project-icon{
            font-size: 140px;
        }
        .project-title{
            font-size: 35px;
        }
        a, i{
            font-size: 42px;
        }
    }
    @media(max-width: 1500px){

        .links{
            width: 80%;
            border-radius: 30px;
        }
        .project-icon{
            font-size: 120px;
        }
        .project-title{
            font-size: 30px;
        }
        a, i{
            font-size: 34px;
        }
    }

    @media(max-width: 1100px){
        .box{
            flex-basis: 60%;
            margin-bottom: 40px;
        }
        .links{
            width: 75%;
            border-radius: 30px;
        }
        .project-icon{
            font-size: 150px;
        }
        .project-title{
            font-size: 36px;
        }
        a, i{
            font-size: 41px;
        }
    }
</style>