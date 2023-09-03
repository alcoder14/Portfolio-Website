<script>
	import Header from "./Sections/Header.svelte";
	import AboutMe from "./Sections/AboutMe.svelte";
	import Skills from "./Sections/Skills.svelte";
	import Projects from "./Sections/Projects.svelte";
	import Contact from "./Sections/Contact.svelte";
	import Footer from "./Sections/Footer.svelte";
	import BackToTop from "./Components/BackToTop.svelte";
	import DetailsModal from "./Components/DetailsModal.svelte";
	import Loading from "./Components/Loading.svelte";
	import BurgerMenu from "./Components/BurgerMenu.svelte";
	import MobileNavbar from "./Components/MobileNavbar.svelte";
    import { get } from "svelte/store";

	// Functionality 

	const scrollToTop=() =>{
		const elem = document.querySelector("#header-section")
		elem.scrollIntoView({
			behavior: "smooth"
		})
	}

	let title, description;
	const assign_data = (e) =>{
		title = e.detail.title
		description = e.detail.description
		toggleModal()
	}

	let modal_displayed = false
	const toggleModal = () =>{
		modal_displayed = !modal_displayed
	}

	let loading = true
	const toggle_loading = () =>{
		loading = !loading
	}

	let scrollY
	const get_scroll_Y = () =>{
		scrollY = window.scrollY
	}

	let width
	const get_browser_width = () =>{
		width = window.innerWidth
	}
	get_browser_width()




	// SCROLL TO CHOSEN SECTION - WAIT 1 SECOND FOR CLOSING ANIMATION TO COMPLETE 
	const scrollTo = (e) =>{
		let target = e.detail.target
		const elem = document.querySelector(target.getAttribute("href"));
        elem.scrollIntoView({
            behavior: "smooth"
        })

		setTimeout(() => {
			mobileNavbarVisible = false
		}, 1000);
	}

	// TOGGLE MOBILE NAVBAR - WAIT 1 SECOND FOR CLOSING ANIMATION TO COMPLETE IN MobileNavbar COMPONENT
	let mobileNavbarVisible = false
	const toggle_mobile_navbar = () =>{

		if(mobileNavbarVisible){
			setTimeout(() => {
				mobileNavbarVisible = false
			}, 1000);
		} else {
			mobileNavbarVisible = true
		}
	}



</script>

<svelte:window on:scroll={get_scroll_Y} on:resize={get_browser_width} />

{#if loading}
	<Loading on:progress_finished={toggle_loading} />
{/if}

{#if width < 850}
	<BurgerMenu on:click={toggle_mobile_navbar} />
{/if}

{#if mobileNavbarVisible && (width < 850)}
	<MobileNavbar on:close={toggle_mobile_navbar} on:scrollIntoView={scrollTo} />
{/if}

<Header on:scrollIntoView={scrollTo} />
<AboutMe bgColor={"brighter"} />
<Skills />
<Projects on:showModal={assign_data} />
<Contact />
<Footer />

{#if modal_displayed }
	<DetailsModal {description} {title} on:click={toggleModal} on:closeModal={toggleModal}/>
{/if}

{#if scrollY > 0}
	<BackToTop on:click={scrollToTop} />
{/if}