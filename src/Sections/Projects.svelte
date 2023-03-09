<script>
    import ProjectBox from "../Components/ProjectBox.svelte";

    let descriptions = [
        "This is a simple front end application which uses VisualCrossing weather API to fetch weather data in JSON format based on location provided by user. Visual presentation of the data was done using SvelteJS framework. Up to 6 search queries for locations at time are saved to local storage.", 
        "A calculator UI application built using SvelteJS. It provides a set of basic mathematical operations to be used for calculations. Every calculation and its result is saved to local storage and displayed in memory section.",
        "Another front-end app built with SvelteJS. It allows users to plan simple events."
    ]

    const projects = [
        {name: "Weather App", icon: "fa-cloud", link: "https://www.aldevportfolio.com/WeatherApp", github: "#", description: descriptions[0]},
        {name: "Calculator App", icon: "fa-calculator", link: "https://www.aldevportfolio.com/Calculator", github: "#", description: descriptions[1]},
        {name: "To Do App", icon: "fa-list", link: "https://www.aldevportfolio.com/ToDoApp", github: "#", description: descriptions[2]},
    ]
</script>

<section class="projects section-padding" id="my-projects-section">
    <div class="project-boxes">
        {#each projects as project}
            <ProjectBox data={project} on:showModal/>
        {/each}
    </div>
</section>

<style>
    .projects{
        background-image: url("/Images/bg.png");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .project-boxes{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    @media(max-width: 1600px){
        .project-boxes{
            justify-content: space-between;
        }
    }
    @media(max-width: 1100px){
        .project-boxes{
            flex-direction: column;
        }
    }
</style>