<script>
	let asa = '../../public/images/asa.webp';
</script>

<style>
	.container{
		height: 100vh;
		width: 50Vw;
		background: radial-gradient(50% 50% at 50% 50%, rgba(32, 25, 102, 0.75) 0%, #141040 100%);
		position: relative;
		overflow: hidden;
	}

	.portfolio{
		position: absolute;
		top: 25%;
		left: calc(50Vw - 128px);
		max-height: 100Vh;
		width: 10px;
		writing-mode:vertical-rl;
		text-orientation: upright;
		font-size: 4rem;
		color: #008890;
		text-align: center;
	}
</style>

<div class="container">
	<p class="portfolio">Portfolio</p>
	<img src={asa} alt="asa"/>
</div>