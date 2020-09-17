<script>
	import Header from './components/Header.svelte';
</script>

<style>

	* {
		margin:0;
		padding: 0;
		display: inline-block;
		list-style: none;
		box-sizing: border-box;
	}

	/* html {
		font-size: 62.5%;
	}

	ul{
		margin: 0px;
		padding: 0px;
		display: flex;
	}

	li {
		list-style: none
	} */

	:global(body) {
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		background-color: #f2eee2;
		color: #008890;
		transition: background-color 0.3s
	}
	:global(body.dark-mode) {
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=1f1f1fff&noise=363536&density=100&opacity=80);
		background-color: #1d3040;
		color: #bfc2c7;
	}

	.container{
		height: 100Vh;
		width: 50Vw;
		background: radial-gradient(50% 50% at 50% 50%, rgba(32, 25, 102, 0.75) 0%, #141040 100%);
	}

</style>

<main>
	<div class="container">
		<Header/>
	</div>
</main>
