<script>

    import SkillBar from "../Components/SkillBar.svelte";

    const skills = [
        {name: "HTML", logo: "html.png", percentage: 90},
        {name: "CSS", logo: "css.png", percentage: 70},
        {name: "JavaScript", logo: "js.png", percentage: 60},
        {name: "Svelte", logo: "svelte.png", percentage: 70},
        {name: "Figma", logo: "figma.png", percentage: 70},
        {name: "Vue", logo: "vue.png", percentage: 30},
        {name: "Sass", logo: "sass.png", percentage: 70},
        {name: "Express", logo: "node.png", percentage: 40},
    ]
</script>

<section class="skills section-padding" id="skills-section">
    
    <div class="skills-show">
        {#each skills as skill}
            <SkillBar {skill} />
        {/each}
    </div>

    <p class="message">I also have some experience with PHP and SQL but they are not part of my main stack.</p>
</section>

<style>
    .skills{
        background-color: #191919;
    }
    .skills-show{
        display: grid;
        grid-template-columns: 42% 42%;
        justify-content: center;
        margin-bottom: 50px;
    }
    .message{
        font-size: 30px;
        color: white;
        text-align: center;
    }
    @media(max-width: 1700px){
        .skills-show{
            grid-template-columns: 50% 50%;
        }
        .message{
            font-size: 28px;
        }
    }
    @media(max-width: 850px){
        .skills-show{
            grid-template-columns: 100%;
        }
        .message{
            font-size: 22px;
        }
    }
</style>