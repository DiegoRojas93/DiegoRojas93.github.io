<script>
	import Header from './components/Header.svelte';
	import Portada from './components/Portada.svelte';
	import AbautMe from './components/AboutMe.svelte';
	import Motivation from './components/Motivation.svelte';
	import Certification from './components/Certification.svelte';
	// import Video from './components/Video.svelte';
	import Portfolio from './components/Portafolio.svelte';
	import Footer from './components/Footer.svelte';

	import MediaQuery from "./utils/MediaQuery.svelte";
</script>

<style>

	:global(){
		margin:0;
		padding: 0;
		list-style: none;
		box-sizing: border-box;
	}

	:global(html){
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	:global(body) {
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		transition: background-color 0.3s;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
	}
	:global(body.dark-mode) {
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=1f1f1fff&noise=363536&density=100&opacity=80);
		background-color: #1d3040;
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Orbitron', sans-serif;
		color: #008890;
		display: inline;
		text-align: center;
		margin: 0;
	}

	:global(h1){
		/* font-size: 2rem; */
		font-size: 3.2rem;
	}
	:global(h2){
		/* font-size: 1.5rem; */
		font-size: 2.4rem;
	}
	:global(h3){
		/* font-size: 1.17rem; */
		font-size: 1.872rem;
	}
	:global(h4){
		/* font-size: 1rem; */
		font-size: 1.6rem;
	}
	:global(h5){
		/* font-size: 0.83rem; */
		font-size: 1.328rem;
	}
	:global(h6){
		/* font-size: 0.67rem; */
		font-size: 1.072rem;
	}

	:global(p){
		color: #302F3E;
		margin: 0;
		text-align: center;
		font-size: 1.6rem;
		font-family: 'IBM Plex Sans', sans-serif;
	}

	:global(a){
		width: 100%;
		height: auto;
		font-size: 1.6rem;
	}

</style>

<Header/>
<Portada/>
<AbautMe/>
<Motivation/>
<Certification/>
<!-- <MediaQuery query="(min-width: 768px)" let:matches>
	{#if matches}
		<Video/>
	{/if}
</MediaQuery> -->
<Portfolio/>
<Footer/>