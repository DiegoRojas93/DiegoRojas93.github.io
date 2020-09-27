<script>
	let title = '</Certification>';
	let title2 = '</Skills>';
	import CertificationModel from '../utils/Certification_Model.svelte';

	let lenguajes = '../../public/images/Lenguajes.webp';
</script>

<style>
	.section__certification{
		max-width: 100%;
		height: 100vh;
		display: grid;
		grid-template: repeat(4, 1fr) / repeat(4, 1fr);
		gap: 1rem;
	}
	.item{
		border: 1px dashed red;
	}

	.certification1{
		grid-column: 1 / 5;
		grid-row: 1 / 3;
	}

	.certification2{
		grid-column: 1 / 3;
		grid-row: 3 / 4;
	}

	.certification3{
		grid-column: 3 / 5;
		grid-row: 3 / 4;
	}

	.certification4{
		grid-column: 1 / 3;
		grid-row: 4 / 5;
	}

	.certification5{
		grid-column: 3 / 5;
		grid-row: 4 / 5;
	}

	.section__skills{
		max-width: 100%;
		height: 100vw;
		display: grid;
		grid-template: repeat(3, 1fr) / repeat(4, 1fr);
		gap: 1rem;
	}

	.preprocesadores{
		grid-column: 1 / 4;
		grid-row: 1 /2;
	}

	.tecnologies{
		grid-column: 1 / 2;
		grid-row: 2 / 4;
	}

	.framewoks{
		grid-column: 2 / 4;
		grid-row: 2 / 4;
	}

	.others{
		grid-column: 4 / 5;
		grid-row: 2 / 4;
	}

	img{
		width: 100%;
		height: auto;
	}
</style>

<h1>{title}</h1>

<section class="section__certification">
	<div class="item certification1"><CertificationModel/></div>
	<div class="item certification2"><CertificationModel/></div>
	<div class="item certification3"><CertificationModel/></div>
	<div class="item certification4"><CertificationModel/></div>
	<div class="item certification5"><CertificationModel/></div>
</section>

<h1>{title2}</h1>

<section class="section__skills">
	<div class="item preprocesadores"></div>
	<div class="item desing"></div>
	<div class="item tecnologies"></div>
	<div class="item framewoks"></div>
	<div class="item others"></div>
</section>

<img src={lenguajes} alt="leguajes"/>