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
		padding: 2rem 5rem 2rem 1rem;
	}

	.title {
		width: 100%;
		max-width: 100vw;
		height: auto;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		text-align: center;
	}


	.container div{
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		margin: 0 0 2rem 0;
	}

	.video__container{
		box-sizing: border-box;
		overflow: hidden;
		padding-bottom: 56.25%;
		position: relative;
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
		font-size: 2rem;
		text-align: center;
	}

	.image{
		width: 100%;
		height: 300px;
		background-image: url('https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80');
		background-attachment: fixed;
		background-position: center;
	}

	@media screen and (min-width: 768px){
		section{
			padding: 2rem;
		}

		.container{
			display:flex;
			flex-direction: column;
		}

		.tablet{
			display:block;
			order: 1;
		}

		.video{
			order: 2
		}
	}

	@media screen and (min-width: 1152px){

		.container{
			flex-direction: row;
		}
		.tablet{
			order: 2;
		}

		.desktop{
			display: flex;
			justify-content: center;
		}

		.container div{
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.container:nth-of-type(2) div{
			margin:0;
		}

		.video{
			order: 1;
			margin: 0;
		}
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
		<div class="desktop">
			<img src={startup} alt="startup">
		</div>
	</article>

	<article class="container">
		<div class="video">
			<div class="video__container">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/YZ7Ml5wc52I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<div class="tablet">
			<p>Yo he apendido programar de forma autodidacta, pero ultimos  meses he aprendido de por medio de platzi (una escuela online de formación profesional en tecnología) los cuales estan certificados por IBM, unity, y reconocidos por Ycombinator y por ASU+GSV. El principal motivo de aprender a programar fue por que quiero trabajar en startups o empresas que esten impactando al mundo por medio del código y del diseño. conoceme más.</p>
		</div>
	</article>
</section>

<div class="image"></div>