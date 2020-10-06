<script>
	let title ='</Portfolio>';

	let IMAGES = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
		{id: 5},
		{id: 6}
	];
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
		/* background-color: aqua; */
		/* border: 1px dashed red; */
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
	}

	.hexagon-inside{
		width: 100%;
		height: 100%;
		background: green;
		transform: rotate(-60deg);
		overflow: hidden;
	}

	.card{
		width: 100%;
		height: 100%;
		transform: rotate(-60deg);
		visibility: visible;
		background-color: #0E0A39;
		position: relative;
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

	.card:hover:before{
		clip-path: circle(100% at 50% 50%);
	}

	@media screen and (min-width: 768px){
		section{
			padding: 2rem;
		}

		.item{
			height: calc(50vw - 10rem);
		}

		.container{
			grid-template: repeat(3, auto) / repeat(2, 1fr) ;
		}
	}

	@media screen and (min-width: 1152px){
		.item{
			height: calc(30vw - 5rem);
		}
		.container{
			grid-template: repeat(2, auto) / repeat(3, 1fr) ;
		}
	}
</style>

<section>
	<div class="title">
		<h1>{title}</h1>
	</div>
	<div class="container">
		{#each IMAGES as image (image.id)}
			<article class="item">
				<div class="hexagon">
					<div class="hexagon-inside">
						<div class="card"></div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>