<script>
	let title = `</ About Me >`;
	let startup = '../../public/images/Startup.webp';

	import MediaQuery from '../utils/MediaQuery.svelte';
</script>

<style>

	section{
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		height: auto;
		margin: 2rem 12rem 2rem 1rem;
	}

	.title {
		width: 100%;
		/* max-width: 100vw; */
		height: auto;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		text-align: center;
	}


	.container div{
		margin: 0
	}

	p {
		font-size: 2rem;
	}

</style>

<section>
	<div class="title">
		<h1>{title}</h1>
	</div>

	<article class="container">
		<div>
			<p>Te voy a contar sobre mí. Nací en Bogotá, Colombia. Graduado como técnico profesional en mecatronica con gran pasión por la tecnología. Soy un frontend developer cuyo objetivo es desarrollar todos los elementos visuales de un sitio web cuya misión es conseguir una experiencia de usuario atractiva y dinámica, a través del manejo de diferentes tecnologías de programación.</p>
		</div>
		<!-- <div class="tablet">
			<img src={startup} alt="startup">
		</div> -->
	</article>

	<article class="container">
		<!-- <div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/YZ7Ml5wc52I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div> -->
		<div class="mobile">
			<p>Yo he apendido programar de forma autodidacta, pero ultimos  meses he aprendido de por medio de platzi (una escuela online de formación profesional en tecnología) los cuales estan certificados por IBM, unity, y reconocidos por Ycombinator y por ASU+GSV. El principal motivo de aprender a programar fue por que quiero trabajar en startups o empresas que esten impactando al mundo por medio del código y del diseño. conoceme más.</p>
		</div>
	</article>
</section>