<script>
	let video = '../../public/video/Video2.mp4';
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
		width: auto;
		height: auto;
		margin-top: 2rem;
		position: relative;
	}

	article{
		width: 100%;
		height: 100%;
		background-color: transparent; 
	}
	video{
		width: 100%;
		height: 100%;
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
		background-color: rgba(14, 10, 57, 0.8);
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

	h1{
		font-size: 3rem;
	}

	p{
		font-size: 1.6rem;
	}

	@media screen and (min-width: 1152px){
		section{
			margin-top: 4rem;
		}
	}
</style>

<section>
	<article>
		<video autoplay muted loop>
			<source src={video} type="video/mp4" />
		</video>
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