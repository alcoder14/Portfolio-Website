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

<section class="section darker" id="skills-section">
    <div class="max-width-1900 skills-show">
        {#each skills as skill}
            <SkillBar {skill} />
        {/each}
    </div>
    <p class="message">I also have some experience with PHP and SQL but they are not part of my main stack.</p>
</section>

<style>
    .skills-show{
        display: grid;
        grid-template-columns: 40% 40%;
        gap: 4%;
        justify-content: center;
        height: 800px;
    }
    .message{
        font-size: 30px;
        color: white;
        text-align: center;
        margin: 0 auto;
        padding: 30px;
    }
    @media(max-width: 1700px){
        .message{
            font-size: 28px;
        }
    }
    @media(max-width: 1050px){
        .skills-show{
            grid-template-columns: 92%;
            height: 1100px;
            gap: 0;
        }
        .message{
            font-size: 22px;
        }
    }
</style>