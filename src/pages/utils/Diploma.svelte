<script>
	import { fade } from 'svelte/transition'
	let diploma = 'https://i.imgur.com/GESD6jp.png';
</script>

<style>
	section{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		position: relative;
	}

	figure{
		margin: 0;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	img{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
</style>

<section>
	<figure transition:fade>
		<a href="https://platzi.com/@Diego-Rojas4304/ruta/7-arquitecto/diploma/detalle/" target="_blank">
			<img src = {diploma} alt="diploma"/>
		</a>
	</figure>
</section>