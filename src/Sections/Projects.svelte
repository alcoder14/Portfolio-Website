<script>
    import ProjectBox from "../Components/ProjectBox.svelte";

    
    let descriptions = {
        weatherApp: "This is a simple front end application which uses VisualCrossing weather API to fetch weather data in JSON format based on location provided by user. Visual presentation of the data was done using SvelteJS framework. Up to 6 search queries for locations at time are saved to local storage.",
        taskApp: "Advanced task management application which lets you create, rename and delete boards. Each board enables you to create tasks with subtasks and filter them into different categories.",
        recipeApp: "This app allows you to search, read and save recipes from many different cuisines. It provides information about ingredients, instructions and details. Built using VueJS."
    }

    const projects = [
        {name: "Weather App", icon: "fa-cloud", link: "https://weather-app-two-navy.vercel.app/", github: "https://github.com/alcoder14/Weather-App", description: descriptions.weatherApp},
        {name: "Task Management App", icon: "fa-list", link: "https://task-management-app-iota-ivory.vercel.app/#/", github: "https://github.com/alcoder14/Task-Management-App", description: descriptions.taskApp },
        {name: "Recipe App", icon: "fa-bowl-food", link: "https://recipe-app-rose-ten.vercel.app/#/", github: "https://github.com/alcoder14/Recipe-App", description: descriptions.recipeApp}
    ]
</script>

<section class="projects section" id="my-projects-section">
    <div class="max-width-1900 project-boxes">
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
        display: grid;
        grid-template-columns: repeat(3, 26%);
        gap: 3%;
        justify-content: center;
        
    }
    @media(max-width: 1300px){
        .project-boxes{
            grid-template-columns: repeat(2, 42%);
        }
    }
    @media(max-width: 1100px){
        .project-boxes{
            justify-content: space-around;
            grid-template-columns: repeat(2, 45%);
        }
    }
    @media(max-width: 768px){
        .projects{
            padding-bottom: 100px;
        }
        .project-boxes{
            justify-content: space-around;
            grid-template-columns: repeat(1, 84%);
        }
    }
</style>