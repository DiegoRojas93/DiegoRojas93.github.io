<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	import MediaQuery from "../utils/MediaQuery.svelte";

	let Hero = '../public/images/hero.svg';
	let landing = '../public/images/Landing.webp';

	let title = '< Hello wordl! />'
	let visible = false;


	onMount(async () => {
		visible = true
	});
</script>

<style>
	.Hero{
		width: 100%;
		height: 100%;
		max-width: 100vw;
		max-height: 100vh;
		display: flex;
		position: relative;
		overflow: hidden;
	}

	.Hero svg {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
	}

	.hero__container {
		padding-top: calc(51px + 4rem);
		height: calc(100% - (51px + 4rem));
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.Hero__container-left, .Hero__container-right{
		box-sizing: border-box;
		width: 100%;
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	.Landing__image{
		width: auto;
		height: 85%;
	}

	.Landing__image img{
		width: auto;
		height: 100%;
	}

	.info{
		width: 100%;
		height: 95%;
		padding: 0rem 5rem 0rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: space-evenly;
	}

	.buttoms__container{
		width: 50%;
		display: flex;
		justify-content: space-between;
	}

	.buttom{
		font-size: 8vh;
		text-decoration: none;
	}

	p{
		text-align: start;
		font-size: 1.6rem;
	}

	h1{
		font-size: 2.4rem;
	}

	.fab {
		color: blueviolet;
		text-align: left;
	}

	@media screen and (min-width: 768px){
		.hero__container {
			padding-top: calc(91px + 4rem);
			height: calc(100% - (91px + 4rem));
		}

		.Landing__image{
			height: 100%;
		}

		.info{
			align-items: center;
			padding: 0;
		}

		.buttom{
			font-size: 12vh;
			text-decoration: none;
		}

		h1{
			font-size: 3.2rem;
		}

		.fab {
			text-align: center;
		}
	}

	@media screen and (min-width: 1152px){
		.hero__container{
			padding-top: calc(60px + 4rem);
			height: calc(100% - (60px + 4rem));
			display: flex;
		}

		.Hero__container-left, .Hero__container-right{
			width: 50%;
			height: 100%;
		}

		.Hero__container-left{
			padding: 5% 0;
		}
		.Hero__container-right{
			padding-top: 5%;
			padding: 5% 0 20% 0;
			align-items: start;
		}


		.info{
			justify-content: space-between;
			align-items: flex-start;
			height: 50%;
		}


		.buttoms__container{
			width: 30%;
			justify-content: space-between;
		}

		.buttom{
			font-size: 8vh;
		}

		.fab {
			text-align: left;
		}

		p{
			color: #f1f1f1;
		}
	}

</style>

<section class="Hero">

	<div>
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1920" height="800" viewBox="0 0 1920 800">
			<defs>
				<linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
					<stop offset="0" stop-color="#201966" stop-opacity="0.851"/>
					<stop offset="1" stop-color="#141040"/>
				</linearGradient>
			</defs>
			<g id="Grupo_354" data-name="Grupo 354" transform="translate(3468 -5583)">
				<rect id="Rectángulo_325" data-name="Rectángulo 325" width="1920" height="800" transform="translate(-3468 5583)" fill="none"/>
				<path id="Trazado_439" data-name="Trazado 439" d="M-.024,0H1499.419V581.672L1198.077,768.684s-45.3,30.551-102,31.3-124.877-31.3-124.877-31.3L59.528,326.273s-34.009-15.539-48.9-44.044S-.024,212.255-.024,212.255Z" transform="translate(-3047.539 5583)" fill="url(#linear-gradient)"/>
			</g>
		</svg>
	</div>


	<div class="hero__container">
		<article class="Hero__container-left">
			<div class="Landing__image">
			{#if visible}
				<img src={landing} alt="Hero" transition:fly={{ x: -200, duration: 5000 }}/>
				{/if}
			</div>
		</article>
		<article class="Hero__container-right">
			<div class="info">
				<section class="buttoms__container">
					<a href="https://twitter.com/DiegoFrontend" class="buttom fab fa-twitter-square" target="_blank"></a>
					<a href="https://www.linkedin.com/in/diego-rojas-4304/" class="buttom fab fa-linkedin" target="_blank"></a>
					<a href="https://github.com/DiegoRojas93" class="buttom fab fa-github-square" target="_blank"></a>
				</section>
				<h1>{title}</h1>
				<p>El código y el diseño es la mejor combinación que conforma un Frontend</p>
			</div>
		</article>
	</div>

			<!-- <i class="fas fa-angle-double-down"></i> -->

</section>