<script>

	import { fade } from 'svelte/transition';

	const certificados = [
		{id: 1, name: '1', image: '../../public/images/certification/(1).png'},
		{id: 2, name: '2', image: '../../public/images/certification/(2).png'},
		{id: 3, name: '3', image: '../../public/images/certification/(3).png'},
		{id: 4, name: '4', image: '../../public/images/certification/(4).png'},
		{id: 5, name: '5', image: '../../public/images/certification/(5).png'},
		{id: 6, name: '6', image: '../../public/images/certification/(6).png'},
		{id: 7, name: '7', image: '../../public/images/certification/(7).png'},
		{id: 8, name: '8', image: '../../public/images/certification/(8).png'},
		{id: 9, name: '9', image: '../../public/images/certification/(9).png'},
		{id: 10, name: '10', image: '../../public/images/certification/(10).png'},
		{id: 11, name: '11', image: '../../public/images/certification/(11).png'},
		{id: 12, name: '12', image: '../../public/images/certification/(12).png'},
		{id: 13, name: '13', image: '../../public/images/certification/(13).png'},
		{id: 14, name: '14', image: '../../public/images/certification/(14).png'},
		{id: 15, name: '15', image: '../../public/images/certification/(15).png'},
		{id: 16, name: '16', image: '../../public/images/certification/(16).png'},
		{id: 17, name: '17', image: '../../public/images/certification/(17).png'},
		{id: 18, name: '18', image: '../../public/images/certification/(18).png'},
		{id: 19, name: '19', image: '../../public/images/certification/(19).png'},
		{id: 20, name: '20', image: '../../public/images/certification/(20).png'},
		{id: 21, name: '21', image: '../../public/images/certification/(21).png'},
		{id: 22, name: '22', image: '../../public/images/certification/(22).png'},
		{id: 23, name: '23', image: '../../public/images/certification/(23).png'},
		{id: 24, name: '24', image: '../../public/images/certification/(24).png'},
		{id: 25, name: '25', image: '../../public/images/certification/(25).png'},
		{id: 26, name: '26', image: '../../public/images/certification/(26).png'},
		{id: 27, name: '27', image: '../../public/images/certification/(27).png'},
		{id: 28, name: '28', image: '../../public/images/certification/(28).png'},
		{id: 29, name: '29', image: '../../public/images/certification/(29).png'},
		{id: 30, name: '30', image: '../../public/images/certification/(30).png'},
	];

	let confirmation = {toggle: false};

	let random = 0;
	let data;
	let alt;
	let src;

	const interval = setInterval(()=>{
		random = Math.round( Math.random() * (certificados.length - 1) + 1);

		data = certificados[random];
		alt = data.name;
		src = data.image;

	}, 3000);

	const recarga = () => {
		if(confirmation.toggle){
			confirmation.toggle = !confirmation.toggle;
		}
	};

</script>

<style>
	section{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		position: relative;
	}

	figure{
		margin: 0;
		position: absolute;
		top:0;
		bottom: 0;
		left: 0;
		right: 0;
		/* text-align: center; */
	}

	img{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
</style>

<section>
	<figure transition:fade>
		<a href="https://platzi.com/@Diego-Rojas4304/curso/1130-illustrator/diploma/detalle/" target="_blank">
			<img {src} {alt} on:load={recarga()} transition:fade="{confirmation.toggle}"/>
		</a>
	</figure>
</section>