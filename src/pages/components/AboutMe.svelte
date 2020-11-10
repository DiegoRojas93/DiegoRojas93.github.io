<script>
	let title = `< About Me />`;
	let startup = 'https://i.imgur.com/gtD9K4G.png';

	import MediaQuery from '../utils/MediaQuery.svelte';
</script>

<style>

	section{
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		height: auto;
		padding: 2rem 5rem 2rem 1rem;
	}

	.title {
		width: 100%;
		max-width: 100vw;
		height: auto;
		padding: 0;
		margin: 0;
		text-align: center;
		margin-bottom: 2rem;
	}

	.container{
		height: calc(50% - 1.2rem);
		width: 100%;
		margin-bottom: 2rem;
	}

	.text{
		width: 100%;
		height: 100%;
	}

	.video__container{
		box-sizing: border-box;
		overflow: hidden;
		padding-bottom: 56.25%;
		position: relative;
		border-radius: 2rem;
	}

	iframe{
		height: 100%;
		width:100%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}

	.tablet, .desktop{
		display: none;
	}

	p {
		font-size: 1.6rem;
		text-align: left;
	}


	@media screen and (min-width: 768px){
		section{
			padding: 0 2rem;
		}

		.container{
			display:flex;
			flex-direction: column;
		}

		.tablet{
			display:block;
			order: 1;
			margin-bottom: 2rem;
		}

		.video{
			order: 2
		}

		p{
			text-align: center;
		}
	}

	@media screen and (min-width: 1152px){

		section {
			height: 125vh;
			margin-bottom: 10vh;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		.container{
			height: 35%;
			flex-direction: row;
		}

		.text, .desktop, .video, .tablet{
			width: 50%;
			height: 100%;
		}

		.desktop{
			display: flex;
			justify-content: center;
		}

		.text{
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		.tablet{
			order: 2;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.tablet .text{
			width: 100%;
			justify-content: flex-end;
		}

		.image{
			margin: auto;
			width: auto;
			height: 100%;
		}

		img{
			height: 100%;
			width: auto;
			border-radius: 2rem;
		}

		.video{
			order: 1;
			margin: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.video__container{
			width: 80%;
			height: 100%;
			padding: 0;
			background: green;
		}

		.container .text p{
			text-align: right;
		}

		.tablet .text p{
			text-align: left;
		}
	}

</style>

<section>
	<div class="title" id="AboutMe2">
		<h2>{title}</h2>
	</div>

	<article class="container">
		<div class="text">
			<p>Te voy a contar sobre mí. Nací en Bogotá, Colombia. Graduado como técnico profesional en mecatronica con gran pasión por la tecnología. Soy un frontend developer cuyo objetivo es desarrollar todos los elementos visuales de un sitio web cuya misión es conseguir una experiencia de usuario atractiva y dinámica, a través del manejo de diferentes tecnologías de programación.</p>
		</div>
		<div class="desktop">
			<div class="image">
				<img src={startup} alt="startup">
			</div>
		</div>
	</article>

	<article class="container">
		<div class="video">
			<div class="video__container">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/YZ7Ml5wc52I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<div class="tablet">
			<div class="text">
				<p>Yo he apendido programar de forma autodidacta, pero ultimos  meses he aprendido de por medio de platzi (una escuela online de formación profesional en tecnología) los cuales estan certificados por IBM, unity, y reconocidos por Ycombinator y por ASU+GSV. El principal motivo de aprender a programar fue por que quiero trabajar en startups o empresas que esten impactando al mundo por medio del código y del diseño. conoceme más.</p>
			</div>
		</div>
	</article>
</section>