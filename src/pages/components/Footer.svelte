<script>
	let src = '../../public/images/Foto.webp';
	let comilla1 = '../../public/images/Comillas1.svg';
	let comilla2 = '../../public/images/Comillas2.svg';
	let svelte = '../../public/images/logos/Svelte.png';
	let webpack = '../../public/images/logos/Webpack.png';
	let NPM = '../../public/images/logos/NPM.png';

	let contactame = '</ Contactame >';
</script>

<style>
	footer{
		height: 100vh;
		max-width: 100vw;
		background-image: url('../../public/images/Footer.webp');
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
	}

	.overlay{
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(32, 25, 102, 0.9);
	}

	.overlay__container{
		box-sizing: border-box;
		/* width: 100%; */
		max-width: 100vw;
		height: 95%;
		display: grid;
		grid-template: 50% 50%/ 100%;
		padding-right: 5rem;
	}

	.cv__referencia{
		grid-row: 1 / 2;
		width: 100%;
		max-width: 100vw;
		padding-top: 2rem;
	}

	.cv{
		display: none;
	}

	.referencia{
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 100vw;
		height: 100%;
	}

	.figure{
		box-sizing: border-box;
		margin: 0;
		width: auto;
		max-width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		background-color: #0E0A39;
	}

	.figure img {
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	.comentario{
		max-height: 100%;
		width: 50%;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.comillas1, .comillas2{
		width: 100%;
		height: auto;
		text-align: start;
	}

	.comillas2{
		text-align: end;
	}

	.comillas1 img, .comillas2 img{
		height: 2rem;
		width: auto;
	}

	blockquote{
		display: block;
		color: #F1F1F1;
		margin: 2rem auto;
		font-size: 1rem;
	}

	.contactame{
		grid-row: 2 / 3;
		width: 100%;
		max-width: 100vw;
		height: 100%;
	}

	.title{
		display: flex;
		justify-content: center;
	}

	.buttoms{
		width: auto;
		height: calc(100% - 43.875px);
		margin: 0 auto;
		display: flex;
		justify-content: center;
		/* align-items: center; */
	}

	.text{
		display: none;
	}

	.text p{
		text-align: center;
	}

	.buttoms__container{
		width: 20rem;
		height: 100%;
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(2, 1fr);
		gap: 1rem;
		text-align: center;
	}

	.buttom{
		font-size: 10vh;
		width: 100%;
		height: auto;
		text-decoration: none;
		color: #008890;
	}

	.copyright{
		grid-row: 3 / 4;
		height: 3.2rem;
		height: 5%;
		background-color: blueviolet;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 2rem;
	}

	.copyright p {
		font-size: 1rem;
		color: #F1F1F1;
	}
	.copyright p + p{
		display: none;
	}

	.copyright p img{
		width: 1rem;
		height: auto;
	}

	@media screen and (min-width: 768px){

		footer{
			height: 568px;
		}
		.overlay__container{
			padding: 0rem;
		}

		.buttom{
			font-size: 12vh;
		}

		.buttoms{
			display: flex;
			justify-content: space-evenly;
			align-items: center;
		}

		.buttoms__container{
			display: grid;
			grid-template: repeat(2, 1fr) / repeat(3, 1fr);
		}

		.text {
			display: inline-block;
			width: 200px;
		}

		.text p {
			color: #f1f1f1;
			font-size: 1.6rem;
		}

		.copyright{
			justify-content: space-between;
		}

		.copyright p + p{
			display: block;
		}
	}

	@media screen and (min-width: 1152px){
		.overlay__container{
			grid-template: 100% / 50% 50%;
		}

		.contactame{
			grid-column: 1 / 2;
			grid-row: 1 / 1;
		}

		.text{
			height: 50%;
			width: 50%;
			display: flex;
			align-items: center;
		}

		.text p {
			font-size: 2rem;
		}

		.buttoms__container{
			width: 50%;
			height: 50%;
			align-content: center;
		}

		.buttoms{
			flex-direction: column;
		}

		.buttom{
			font-size: 10vh;
		}


		.referencia{
			grid-column: 2 / 3;
			grid-row: 1 / 1;	
			height: 50%
		}

		.cv{
			height: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;
		}

		.cv p{
			color: #f1f1f1;
			font-size: 2rem;
		}

		button{
			box-sizing: border-box;
			width: 20%;
			height: 4rem;
			background: #008890;
			border-radius: 1rem;
			font-size: 2rem;
			text-align: center;
			cursor: pointer;
			transition: background 300ms ease-in-out;
		}

		button:hover {
		background-position: 0;
		color: #aaa;
		}
	}



</style>

<footer>
	<div class="overlay">
		<div class="overlay__container">
		<section class="cv__referencia">
			<section class="referencia">
				<div class="figure">
					<img {src} alt="Foto">
				</div>
				<article class="comentario">
					<div class="comillas1">
						<img src={comilla1} alt="comilla1">
					</div>
					<blockquote>
						
							Desarrollar una habilidad duele, pero si te levantas a aprender, a creer y a esforzarte, lograras más de lo te hayas imaginado esperar.
						
					</blockquote>
					<div class="comillas2">
						<img src={comilla2} alt="comilla2">
					<div/>
				</article>
			</section>
			<article class="cv">
				<p>Si no haz visto mi Hoja de vida te invito a que la descargues</p>
				<button><p>Download</p></button>
			<article/>
		</section>
			<section class="contactame">
				<div class="title">
					<h2>{contactame}</h2>
				</div>
				<div class="buttoms">
					<div class="text">
						<p>Si tienes una oferta de trabajo y estás interesado en que trabajemos juntos o simplemente quiere saludarme, contáctame en las siguientes redes sociales.</p>
					</div>
					<div class="buttoms__container">
						<a href="https://twitter.com/DiegoFrontend" class="buttom fab fa-twitter-square" target="_blank"></a>
						<a href="https://www.linkedin.com/in/diego-rojas-4304/" class="buttom fab fa-linkedin" target="_blank"></a>
						<a href="https://github.com/DiegoRojas93" class="buttom fab fa-github-square" target="_blank"></a>
						<a href="https://es.stackoverflow.com/users/167631/diego-rojas?tab=profile" class="buttom fab fa-stack-overflow" target="_blank"></a>
						<a href="https://codepen.io/diegorojas93" class="buttom fab fa-codepen" target="_blank"></a>
						<a href="https://co.pinterest.com/diegorojas431/_saved/" class="buttom fab fa-pinterest-square" target="_blank"></a>
					</div>
				</div>
			</section>
		</div>
		<section class="copyright">
			<p>&copy; 2020 Todos los derechos reservados | <strong>Diego Rojas</strong></p>
			<p>Hecho con ❤ Diego Rojas | <img src={svelte} alt="svelte"/> | <img src={webpack} alt="webpack"/> | <img src={NPM} alt="NPM"/> |</p>
		</section>
	</div>
</footer>