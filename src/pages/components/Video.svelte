<script>
	// let video = '../../public/video/Video2.mp4';
	let src = 'https://i.imgur.com/DkQPnAE.gifv';
</script>

<style>

	h1, p{
		color: white;
		text-align: center;
	}

	p{
		font-weight: 3rem;
	}

	section{
		width: 100vw;
		height: 100Vh;
		position: relative;
	}

	article{
		width: 100%;
		height: 100%;
		background-color: transparent;
	}

	img{
		width: 100%;
		height: auto;
	}

	.overlay{
		width: 100%;
		height: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1;
		background-color: rgba(20,16,64,0.8);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.angulo1 {
    position: absolute;
    top: 0;
		left: 0;
		z-index: 2;
    width: 100%;
    height: 10vw;
    fill: #f1f1f1;
	}
	.angulo2 {
    position: absolute;
    bottom: 0;
		left: 0;
		z-index: 2;
    width: 100%;
    height: 10vw;
    fill: #f1f1f1;
	}

	@media screen and (min-width: 1152px){
		section{
			margin-bottom: 10Vh;
		}
	}
</style>

		<img src={src} alt="gif">
<section>
	<article>
		<!-- <video autoplay muted loop>
			<source src={video} type="video/mp4" />
		</video> -->
		<img {src} alt='gif hexagon'/>
		<div class="overlay">
			<h1>Estoy ansioso de diseñar cosas increibles con codigo</h1>
			<p>Puedes estar seguro que siempre pongo todo mi compromiso en lo que realizo para entregar el mejor proyecto posible.</p>
		</div>
	</article>
	<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="angulo1">
		<polygon points="100,0 0,100 0,0" />
	</svg>
	<svg viewBox="0 0 100 100" preserveAspectRatio="none" class="angulo2">
		<polygon points="0,100 100,0 100,100" />
	</svg>
</section>