<script>
	import MediaQuery from "../utils/MediaQuery.svelte";

	let asa = '../../public/images/asa.webp';
	let macbook = '../public/images/Macbook.webp';
	let keyboard = '../public/images/keyboard.webp';
	let mouse = '../public/images/Mouse.webp';
	let pen = '../public/images/Pen.webp';
	let book = '../public/images/Book.webp';
	let pantone = '../public/images/Pantone.webp';
</script>

<style>

	section{
		box-sizing: border-box;
		height: 100vh;
		max-width: 100vw;
		display: flex;
	}

	.portada{
		height: 100vh;
		width: 50Vw;
		background: radial-gradient(50% 50% at 50% 50%, rgba(32, 25, 102, 0.75) 0%, #141040 100%);
		position: relative;
		overflow: hidden;
	}

	.portfolio{
		position: absolute;
		top: 25%;
		left: calc(50Vw - 6rem);
		bottom: 10%;
		max-height: 100Vh;
		width: 20px;
		height: auto;
		writing-mode:vertical-rl;
		text-orientation: upright;
		font-size: 4rem;
		color: #008890;
		text-align: center;
		font-family: 'Orbitron', sans-serif;
		margin: auto 0;
	}

	img {
		object-fit: scale-down;
		width: 100%;
		height: 100%;
	}

	.asa{
		width: auto;
		height: auto;
		position: absolute;
		right: 0;
		top: calc(50% - 65px);
	}

	.container{
		box-sizing: border-box;
		width: 50vw;
		height: 100vh;
		padding-top: 90px;
		display: grid;
		grid-template: repeat(4, 1fr) / repeat(4, 1fr);
		gap: 1rem;
		overflow: hidden;
	}

	.item {
		box-sizing: border-box;
		border: 1px dashed red;
	}

	.mac {
		grid-column: 1 / 3;
		grid-row: 1 / 3;
	}

	.keyboard {
		grid-column: 3 / 5;
		grid-row: 0 / 2;
	}
	.book {
		grid-column: 1 / 3;
		grid-row: 3 / 5;
	}
	.pantone {
		grid-column: 3 / 5;
		grid-row: 3 / 5;
	}
</style>

<section>
	<div class="portada">
		<p class="portfolio">Portfolio</p>
		<MediaQuery query="(min-width: 1152px)" let:matches>
			{#if matches}
				<img src={asa} alt="asa" class="asa"/>
			{/if}
		</MediaQuery>
	</div>

	<MediaQuery query="(min-width: 1152px)" let:matches>
		{#if matches}
			<div class="container">
				<div class="item mac">
					<img src={macbook} alt="macbook">
				</div>
				<div class="item keyboard">
					<img src={keyboard} alt="keyboard">
				</div>
				<div class="item mouse">
					<img src={mouse} alt="mouse">
				</div>
				<div class="item pen">
					<img src={pen} alt="pen">
				</div>
				<div class="item book">
					<img src={book} alt="book">
				</div>
				<div class="item pantone">
					<img src={pantone} alt="pantone">
				</div>
			</div>
		{/if}
	</MediaQuery>

</section>