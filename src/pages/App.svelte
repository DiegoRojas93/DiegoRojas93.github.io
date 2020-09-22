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
		/* font-size: 62.5%; */
	}
	:global(body.dark-mode) {
		margin: 0;
		padding: 0;
		background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=1f1f1fff&noise=363536&density=100&opacity=80);
		background-color: #1d3040;
		color: #bfc2c7;
		box-sizing: border-box;
	}

	/* main{
		margin: 0;
		padding: 0;
		width: 100vw;
		height: 100vh;
	}

	.portada{
		height: 100vh;
		width: 50Vw;
		background: radial-gradient(50% 50% at 50% 50%, rgba(32, 25, 102, 0.75) 0%, #141040 100%);
		position: relative;
	} */

</style>

<main>

	<Header/>
	<Portada />
	<!-- <div class="portada"></div> -->
</main>
