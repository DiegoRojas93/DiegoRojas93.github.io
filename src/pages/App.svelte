<script>
	import Header from './components/Header.svelte';
	import Portada from './components/Portada.svelte';
	import AbautMe from './components/AboutMe2.svelte';
	import Certification from './components/Certification.svelte';
	import Video from './components/Video.svelte';
	import Portfolio from './components/Portfolio.svelte';
	import Coding from './components/Coding.svelte';

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
	}

	:global(body) {
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		transition: background-color 0.3s;
		box-sizing: border-box;
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
	}

	:global(p){
		color: #302F3E;
		margin: 0;
		text-align: center;
	}

</style>

<Header/>
<Portada/>
<AbautMe/>
<Certification/>
<MediaQuery query="(min-width: 768px)" let:matches>
	{#if matches}
		<Video/>
	{/if}
</MediaQuery>
<Portfolio/>
<MediaQuery query="(min-width: 1152px)" let:matches>
	{#if matches}
		<Coding/>
	{/if}
</MediaQuery>