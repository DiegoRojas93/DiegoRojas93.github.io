<script>
	import MediaQuery from "../utils/MediaQuery.svelte";

	let asa = '../../public/images/asa.webp';
	let macbook = '../public/images/Macbook.webp';
	let keyboard = '../public/images/keyboard.webp';
	let mouse = '../public/images/Mouse.webp';
	let pen = '../public/images/Pen.webp';
	let book = '../public/images/Book.webp';
	let pantone = '../public/images/Pantone.webp';
	let Hero = '../public/images/hero.svg';
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

	.Hero img {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: auto;
		border: #8a2be2;
	}


</style>

<section class="Hero">
	<img src={Hero} alt="Hero">
	<article class="Hero__left">
		
	</article>
	<article class="Hero__right">
		<!-- <i class="fas fa-angle-double-down"></i> -->
	</article>

</section>