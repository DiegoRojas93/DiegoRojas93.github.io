<script>
	import Header from './components/Header.svelte';
	import Portada from './components/Portada.svelte';
</script>

<style>

	* {
		margin:0;
		padding: 0;
		display: inline-block;
		list-style: none;
		box-sizing: border-box;
	}

	:global(html){
		font-size: 62.5%;
	}

	:global(body) {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=#f1f1f1ff&noise=cdcdcd&density=100&opacity=75);
		color: #008890;
		transition: background-color 0.3s;
		box-sizing: border-box;
	}
	:global(body.dark-mode) {
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=1f1f1fff&noise=363536&density=100&opacity=80);
		background-color: #1d3040;
		color: #bfc2c7;
		box-sizing: border-box;
	}

	main{
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
	}

</style>

<main>

	<Header/>
	<Portada />
</main>
