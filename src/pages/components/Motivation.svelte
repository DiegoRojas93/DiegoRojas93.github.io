<script>
	let clip = '../../public/video/Video.mp4';
	let gif = '../../public/images/Video.gif';
	let motivation1 = '../../public/images/motivation1.webp';
	let motivation2 = '../../public/images/motivation2.webp';
	let Image = '../../public/images/Image.webp';
	let Image1 = '../../public/images/Image-1.webp';
	let Image2 = '../../public/images/Image-2.webp';
	let Image3 = '../../public/images/Image-3.webp';
</script>

<style>

	.motivation{
		width: 100%;
		max-width: 100Vw;
		height: 100Vh;
		margin-bottom: 10vw;
		background:rgba(20,16,64,1);
		position: relative;
	}

	.motivation__container{
		box-sizing: border-box;
		margin: 0 5rem 0 1rem;
		height: 100%;
		width: calc(100% - 6rem);
		max-width: 100vw;
	}

	.motivation__left{
		height: 50%;
		width: 100%;
		background:rgba(20,16,64,1);
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	.motivation__right{
		width: 100%;
		height: 50%;
		background: radial-gradient(50% 50% at 50% 50%, rgba(32, 25, 102, 0.5) 0%, #141040 95%, #141040 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	svg {
    position: absolute;
    top: 100%;
		left: 0;
		right: 0;
    width: 100%;
		max-width: 100vw;
    height: 10vw;
    fill: rgba(20,16,64,1);
	}

	.title{
		padding: 0 1rem;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
	}

	.title h2{
		font-size: 2rem;
	}

	.gif{
		height: 100%;
		width: 100%;
		max-width: 500px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img{
		width: 100%;
		height: auto;
		max-height: 100%;
		border-radius: 2rem;
	}

	.image1, .image2, .image3, .image4{
		position: absolute;
		text-align: center;
	}

	.image4 {
		width: 18vw;
		height: auto;
		top: 0.5rem;
		left: 0.5rem;
		transform-origin: 44.5% 40.3%;
		animation: rotation 5s linear infinite;
	}

	.image1 {
		width: 25vw;
		height: auto;
		top: -2rem;
		right: 5rem;
	}

	.image3 {
		width: 25vw;
		height: auto;
		bottom: 25rem;
		right: 5rem;
	}

	.image2 {
		width: 20vw;
		height: auto;
		top: 30rem;
		left: 5rem;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg)
		}
		to{
			transform: rotate(359deg)
		}
	}

	@media screen and (min-width:768px){
		.motivation{
			height: 500px;
			background: none;
		}

		.motivation__container{
			margin: 0;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.motivation__left, .motivation__right{
			height: 100%;
		}

		.gif{
			height: 100%;
			width: 100%;
			max-width: none;
			margin: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.title h2{
			font-size: 2.4rem;
		}

		img {
			width: 75%;
		}

		.image1{
			width: 22.5vw;
			top: 5rem;
		}

		.image3 {
			z-index: 1;
			right: 10rem;
			bottom: -18rem;
			width: 30vw;
		}

		.image2 {
			width: 30vw;
			height: auto;
			top: 40rem;
			left: 10rem;
			z-index: 1;
		}

	}

	@media screen and (min-width:1152px){

		.motivation{
			margin-bottom: 15vw;
		}

		.image1{
			top: -7rem;
		}

		.image2 {
			width: 20vw;
		}

		.image3 {
			z-index: 1;
			bottom: -25rem;
			right: 30rem;
		}
	}
</style>

<section class="motivation">
	<div class="motivation__container">
		<article class="motivation__left">
			<div class="title">
				<h2>Creeme que la mejor inversion a futuro para la compañia sera contratarme</h2>
				<h1>Trabajemos juntos</h1>
			</div>
		</article>
		<article class="motivation__right">
			<div class="gif">
				<img src={gif} alt="gif">
			</div>
		</article>

	<div class="image1">
		<img src={Image} alt="image">
	</div>
	<div class="image2">
		<img src={Image1} alt="image1">
	</div>
		<div class="image3">
	<img src={Image2} alt="image2">
		</div>
	<div class="image4">
		<img src={Image3} alt="image3">
	</div>

	</div>
		<svg viewBox="0 0 100 100" preserveAspectRatio="none">
			<polygon points="100,0 0,100 0,0" />
		</svg>
</section>