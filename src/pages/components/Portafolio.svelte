<script>
	let title ='</ Portfolio >';

	let IMAGES = [
		{	id: 1,
			title: 'Platzi Video',
			mac: 'https://i.imgur.com/bBsfWVO.png',
			macbook: 'https://i.imgur.com/VbSbULG.png',
			smartphone: 'https://i.imgur.com/tDtFMZF.png',
			showWork: 'https://diegorojas93.github.io/Plazti_Video/',
			showCode: 'https://github.com/DiegoRojas93/Plazti_Video'
		},
		{	id: 2,
			title: '100tifi.co',
			mac: 'https://i.imgur.com/AD5q8uv.png',
			macbook: 'https://i.imgur.com/8jmyQwB.png',
			smartphone: 'https://i.imgur.com/Aye4u3C.png',
			showWork: 'https://diegorojas93.github.io/SPA/',
			showCode: 'https://github.com/DiegoRojas93/SPA'
		},
		{	id: 3,
			title: 'Postcast',
			mac: 'https://i.imgur.com/HejJpT7.png',
			macbook: 'https://i.imgur.com/DATisxf.png',
			smartphone: 'https://i.imgur.com/2qEjm6k.png',
			showWork: 'https://podcasts-de-platzi.vercel.app/',
			showCode: 'https://github.com/DiegoRojas93/Podcasts_de_Platzi'
		},
		{	id: 4,
			title: 'Simon Dice',
			mac: 'https://i.imgur.com/5B4wbQM.png',
			macbook: 'https://i.imgur.com/i7aU38J.png',
			smartphone: 'https://i.imgur.com/fkKmFOU.png',
			showWork: 'https://diegorojas93.github.io/Simon_Dice/Index.html',
			showCode: 'https://github.com/DiegoRojas93/Simon_Dice'
		},
		{	id: 5,
			title: 'Platzi Conf',
			mac: 'https://i.imgur.com/FlNfXIj.png',
			macbook: 'https://i.imgur.com/69Wypkj.png',
			smartphone: 'https://i.imgur.com/EPEk2pN.png',
			showWork: 'https://diegorojas93.github.io/Platzi-Talks-bootstrap/',
			showCode: 'https://github.com/DiegoRojas93/Platzi-Talks-bootstrap'
		},
		{	id: 6,
			title: 'Platzi Foot',
			mac: 'https://i.imgur.com/izSoexN.png',
			macbook: 'https://i.imgur.com/z4Hxp5Y.png',
			smartphone: 'https://i.imgur.com/EhVtU3X.png',
			showWork: 'https://diegorojas93.github.io/PlatziFoot/public/home.html',
			showCode: 'https://github.com/DiegoRojas93/PlatziFoot'
		},
	];

	let diseño = 'https://i.imgur.com/PWTImiM.png';
	let code = 'https://i.imgur.com/3DUaaWT.png';

</script>

<style>

	section{
		box-sizing: border-box;
		max-width: 100vw;
		width: auto;
		height: auto;
		padding: 2rem 5rem 2rem 1rem;
	}


	.title{
		text-align: center;
		margin-bottom: 2rem;
	}

	.container{
		width: 100%;
		height: auto;
		display: grid;
		grid-template: repeat(6, auto) / 1fr;
		gap: 2rem;
	}

	.item{
		width: 100%;
		height: calc(100vw - 10rem);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hexagon{
		width: 86.666%;
		height: 200%;
		background: red;
		transform: rotate(90deg);
		overflow: hidden;
		visibility: hidden;
		transition: 0.5s ease-in-out;
	}

	.hexagon-inside{
		width: 100%;
		height: 100%;
		background: green;
		transform: rotate(-60deg);
		overflow: hidden;
		transition: 0.5s ease-in-out;
	}

	.card{
		width: 100%;
		height: 100%;
		transform: rotate(-60deg);
		visibility: visible;
		overflow: hidden;
		background-color: #0E0A39;
		position: relative;
		transition: 0.5s ease-in-out;
		/* box-shadow:  5px 5px 10px #666666, -5px -5px 10px #ffffff; */
	}

	.hexagon:hover{
		width: 100%;
		height: 100%;
		transform: rotate(0deg);
	}

	.hexagon-inside:hover{
		transform: rotate(0deg);
	}

	.card:hover{
		transform: rotate(0deg);
		border-radius: 2rem;
	}

	.card:before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: blueviolet;
		clip-path: circle(20% at 85% 30%);
		transition: 0.5s ease-in-out;
	}

	.card:after{
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 70%;
		bottom: 0%;
		width: 100%;
		height: 100%;
		background-color: #0E0A39;
		transform: translate(0,500px);
		transition: 0.5s ease-in-out;
	}
	.card:hover:after{
		content: '';
		transform: translate(0, 0);
	}


	.card:hover:before{
		clip-path: circle(100%);
	}

	.mac{
		position: absolute;
		z-index: 3;
		transform: translate(0, -20rem);
		width: 100%;
		margin: auto;
		justify-content: center;
		transition: 0.5s ease-in-out;
	}

	.mac figure{
		margin: 1rem auto 0;
		width: 75%;
	}

	.macbook{
		position: absolute;
		z-index: 3;
		transform: translate(-10rem, -10rem) rotate(30deg);
		transition: 0.5s ease-in-out;
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.macbook figure{
		margin: auto 0;
		width: 25rem;
		height: auto;
	}

	.smartphone{
		position: absolute;
		z-index: 3;
		left: 12.5%;
		top: 50%;
		transform: rotate(30deg);
		transition: 0.5s ease-in-out;
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
	}
	.smartphone figure{
		margin: auto 0;
		width: 25rem;
	}

	img{
		height: 100%;
		width: 100%;
	}

	.icons{
		position: absolute;
		z-index: 4;
		left: 0;
		right: 0;
		bottom: 0;
		top: 70%;
		width: 100%;
		height: 30%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 4rem;
		visibility: hidden;
		transition: 0.5s ease-in-out;
	}

	.card:hover .icons{
		visibility: visible;
	}

	.icons a{
		box-sizing: border-box;
		margin: 0;
		height: 90%;
		width: 25%;
		max-width: 25%;
		padding: 1rem;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		border-radius: 0;
		background: none;
		box-shadow: none;
		transition: 0.3s ease-in-out;
	}

	.icons a img{
		width: auto;
		height: 75%;
	}

	.icons a:hover{
		border-radius: 10px;
		background: linear-gradient(145deg, #0d0933, #0f0b3d);
		box-shadow:  5px 5px 10px #060417, -5px -5px 10px #16105b;
	}
	.icons a:active{
		border-radius: 10px;
		background: #0E0A39;
		box-shadow: inset 5px 5px 10px #060417, inset -5px -5px 10px #16105b;
	}

	.icons a p {
		font-weight: 600;
		font-size: 1rem;
		color: blueviolet;
	}

	.anchor__container{
		width: 100%;
		height: 100%;
	}

	.card:hover .mac{
		transform: translate(0, 0rem);
	}
	.card:hover .macbook{
		transform: translate(-60rem, 15rem);
	}
	.card:hover .smartphone{
		transform: translate(20rem, 40rem) ;
	}

	h3{
		margin-top: 1rem;
		font-size: 1.6rem;
	}


	@media screen and (min-width: 768px){
		section{
			/* max-height: 100vh; */
			padding: 2rem;
		}

		.item{
			height: calc(50vw - 10rem);
		}

		.container{
			grid-template: repeat(3, auto) / repeat(2, 1fr) ;
		}

		h3{
			margin-top: 2rem;
			font-size: 1.872rem;
		}

		.icons a {
			font-size: 1.6rem;
		}

		.icons p {
			font-size: 1.6rem;
		}
	}

	@media screen and (min-width: 1152px){

		section{
			margin-bottom: 10vh;
		}
		.item{
			height: calc(30vw - 5rem);
		}
		.container{
			grid-template: repeat(2, auto) / repeat(3, 1fr) ;
		}

	}
</style>

<section>
	<div class="title" id="porfolio">
		<h2>{title}</h2>
	</div>
	<div class="container">
		{#each IMAGES as image (image.id)}
			<article class="item">
				<div class="hexagon">
					<div class="hexagon-inside">
						<div class="card">
							<div class="mac">
								<figure>
									<img src={image.mac} alt="mac"/>
								</figure>
							</div>
							<div class="macbook">
								<figure>
									<img src={image.macbook} alt="macbook"/>
								</figure>
							</div>
							<div class="smartphone">
								<figure>
									<img src={image.smartphone} alt="smartphone"/>
								</figure>
							</div>
							<section class="icons">
								<a href={image.showWork} target="_blank">
									<img src={diseño} alt="diseño"/>
									<p>Ver Proyecto</p>
								</a>
								<h3>{image.title}</h3>
								<a href={image.showCode} target="_blank">
									<img src={code} alt="code"/>
									<p>Ver Código</p>
								</a>
							</section>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>