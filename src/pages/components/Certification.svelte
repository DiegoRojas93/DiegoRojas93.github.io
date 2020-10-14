<script>
	let title = '</Certification>';
	let title2 = '</Skills>';
	import CertificationModel from '../utils/Certification_Model.svelte';
	import Diploma from '../utils/Diploma.svelte';

	const CERTIFICADOS = [
		{id: 1, name: '1', image: '../../public/images/certification/1.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/2008-html-css-2020/diploma/detalle/'},
		{id: 2, name: '2', image: '../../public/images/certification/2.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1651-react-ejs/diploma/detalle/'},
		{id: 3, name: '3', image: '../../public/images/certification/3.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1802-accesibilidad-web/diploma/detalle/'},
		{id: 4, name: '4', image: '../../public/images/certification/4.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1961-figma/diploma/detalle/'},
		{id: 5, name: '5', image: '../../public/images/certification/5.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1311-next-2018/diploma/detalle/'},
		{id: 6, name: '6', image: '../../public/images/certification/6.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1342-react-router/diploma/detalle/'},
		{id: 7, name: '7', image: '../../public/images/certification/7.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1652-react-router-redux/diploma/detalle/'},
		{id: 8, name: '8', image: '../../public/images/certification/8.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1613-redux/diploma/detalle/'},
		{id: 9, name: '9', image: '../../public/images/certification/9.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1867-devtools/diploma/detalle/'},
		{id: 10, name: '10', image: '../../public/images/certification/10.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1944-estrategias-ingles/diploma/detalle/'},
		{id: 11, name: '11', image: '../../public/images/certification/11.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1895-sapper/diploma/detalle/'},
		{id: 12, name: '12', image: '../../public/images/certification/12.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1420-sistemas-diseno/diploma/detalle/'},
		{id: 13, name: '13', image: '../../public/images/certification/13.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1851-svelte/diploma/detalle/'},
		{id: 14, name: '14', image: '../../public/images/certification/14.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1620-webpack/diploma/detalle/'},
		{id: 15, name: '15', image: '../../public/images/certification/15.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1789-asincronismo-js/diploma/detalle/'},
		{id: 16, name: '16', image: '../../public/images/certification/16.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1807-scope/diploma/detalle/'},
		{id: 17, name: '17', image: '../../public/images/certification/17.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1906-diseno-programadores/diploma/detalle/'},
		{id: 18, name: '18', image: '../../public/images/certification/18.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1301-expresiones-regulares/diploma/detalle/'},
		{id: 19, name: '19', image: '../../public/images/certification/19.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1765-postman/diploma/detalle/'},
		{id: 20, name: '20', image: '../../public/images/certification/20.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1548-react/diploma/detalle/'},
		{id: 21, name: '21', image: '../../public/images/certification/21.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1787-spa-javascript/diploma/detalle/'},
		{id: 22, name: '22', image: '../../public/images/certification/22.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1390-optimizacion-web/diploma/detalle/'},
		{id: 23, name: '23', image: '../../public/images/certification/23.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1771-singlepage-app/diploma/detalle/'},
		{id: 24, name: '24', image: '../../public/images/certification/24.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1103-animaciones-web/diploma/detalle/'},
		{id: 25, name: '25', image: '../../public/images/certification/25.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1331-bootstrap/diploma/detalle/'},
		{id: 26, name: '26', image: '../../public/images/certification/26.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1493-diseno-interfaz/diploma/detalle/'},
		{id: 27, name: '27', image: '../../public/images/certification/27.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1784-escritura-online/diploma/detalle/'},
		{id: 28, name: '28', image: '../../public/images/certification/28.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1332-foundation/diploma/detalle/'},
		{id: 29, name: '29', image: '../../public/images/certification/29.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1130-illustrator/diploma/detalle/'},
		{id: 30, name: '30', image: '../../public/images/certification/30.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1798-javascript-navegador/diploma/detalle/'},
		{id: 31, name: '31', image: '../../public/images/certification/31.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1805-materialize/diploma/detalle/'},
		{id: 32, name: '32', image: '../../public/images/certification/32.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1285-hablar-en-publico/diploma/detalle/'},
		{id: 33, name: '33', image: '../../public/images/certification/33.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1422-diseno-desarrolladores/diploma/detalle/'},
		{id: 34, name: '34', image: '../../public/images/certification/34.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1822-tailwind-css/diploma/detalle/'},
		{id: 35, name: '35', image: '../../public/images/certification/35.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1872-teletrabajo-trabajo-remoto/diploma/detalle/'},
		{id: 36, name: '36', image: '../../public/images/certification/36.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1744-practico-css/diploma/detalle/'},
		{id: 37, name: '37', image: '../../public/images/certification/37.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1637-adobe-xd/diploma/detalle/'},
		{id: 38, name: '38', image: '../../public/images/certification/38.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1628-fotografia-telefono/diploma/detalle/'},
		{id: 39, name: '39', image: '../../public/images/certification/39.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1763-npm/diploma/detalle/'},
		{id: 40, name: '40', image: '../../public/images/certification/40.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1228-fundamentos-diseno/diploma/detalle/'},
		{id: 41, name: '41', image: '../../public/images/certification/41.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1246-less/diploma/detalle/'},
		{id: 42, name: '42', image: '../../public/images/certification/42.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1242-postcss/diploma/detalle/'},
		{id: 43, name: '43', image: '../../public/images/certification/43.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1665-preprocesadores/diploma/detalle/'},
		{id: 44, name: '44', image: '../../public/images/certification/44.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1244-sass/diploma/detalle/'},
		{id: 45, name: '45', image: '../../public/images/certification/45.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1245-stylus/diploma/detalle/'},
		{id: 46, name: '46', image: '../../public/images/certification/46.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1316-jquery-js/diploma/detalle/'},
		{id: 47, name: '47', image: '../../public/images/certification/47.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1814-basico-javascript/diploma/detalle/'},
		{id: 48, name: '48', image: '../../public/images/certification/48.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1815-ecmascript-6/diploma/detalle/'},
		{id: 49, name: '49', image: '../../public/images/certification/49.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1640-frontend-developer/diploma/detalle/'},
		{id: 50, name: '50', image: '../../public/images/certification/50.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1748-terminal/diploma/detalle/'},
		{id: 51, name: '51', image: '../../public/images/certification/51.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1650-prework/diploma/detalle/'},
		{id: 52, name: '52', image: '../../public/images/certification/52.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1339-fundamentos-javascript/diploma/detalle/'},
		{id: 53, name: '53', image: '../../public/images/certification/53.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1758-html-practico/diploma/detalle/'},
		{id: 54, name: '54', image: '../../public/images/certification/54.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1749-gestion-tiempo/diploma/detalle/'},
		{id: 55, name: '55', image: '../../public/images/certification/55.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1220-marca-personal/diploma/detalle/'},
		{id: 56, name: '56', image: '../../public/images/certification/56.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1362-responsive-design/diploma/detalle/'},
		{id: 57, name: '57', image: '../../public/images/certification/57.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1229-css-grid-layout/diploma/detalle/'},
		{id: 58, name: '58', image: '../../public/images/certification/58.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1350-html5-css3/diploma/detalle/'},
		{id: 59, name: '59', image: '../../public/images/certification/59.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1492-html-css/diploma/detalle/'},
		{id: 60, name: '60', image: '../../public/images/certification/60.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1557-git-github/diploma/detalle/'},
		{id: 61, name: '61', image: '../../public/images/certification/61.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1608-aprender/diploma/detalle/'},
		{id: 62, name: '62', image: '../../public/images/certification/62.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1050-programacion-basica/diploma/detalle/'},
		{id: 63, name: '63', image: '../../public/images/certification/63.png', link: 'https://platzi.com/@Diego-Rojas4304/curso/1098-ingenieria/diploma/detalle/'},
	];

	const PREPROCESADORES = [
		{id: 1, name: 'Sass', image: '../../public/images/logos/Sass.png'},
		{id: 2, name: 'Less', image: '../../public/images/logos/Less.png'},
		{id: 3, name: 'Stylus', image: '../../public/images/logos/Stylus.png'},
		{id: 4, name: 'Postcss', image: '../../public/images/logos/Postcss.png'},
		{id: 4, name: 'Pug', image: '../../public/images/logos/Pug.png'},
	]

	const DESING = [
		{id: 1, name: 'Adobe XD', image: '../../public/images/logos/Adobe-xd.png'},
		{id: 2, name: 'Adobe Ilustrator', image: '../../public/images/logos/Adobe-illustrator.png'},
		{id: 3, name: 'Figma', image: '../../public/images/logos/Figma.png'}
	]

	const FRAMEWORKSCSS = [
		{id: 1, name: 'Bootstrap', image: '.../../public/images/logos/Bootstrap.png'},
		{id: 2, name: 'TailwindCss', image: '../../public/images/logos/Tailwind.png'},
		{id: 3, name: 'Materialize', image: '../../public/images/logos/Materializecss.png'},
		{id: 4, name: 'Foundation', image: '../../public/images/logos/Foundation.png'},
	]

	const FRAMEWORKSJS = [
		{id: 1, name: 'React', image: '../../public/images/logos/React.png'},
		{id: 2, name: 'Svelte', image: '../../public/images/logos/Svelte.png'},
		{id: 3, name: 'React-router', image: '../../public/images/logos/React-router.png'},
		{id: 4, name: 'Redux', image: '../../public/images/logos/Redux.png'},
		{id: 5, name: 'Webpack', image: '../../public/images/logos/Webpack.png'},
		{id: 6, name: 'Next', image: '../../public/images/logos/Nextjs.png'},
	]

	const TECNOLOGIAS = [
		{id: 1, name: 'Terminal de comandos', image: '../../public/images/logos/Terminal-de-comandos.png'},
		{id: 2, name: 'git', image: '../../public/images/logos/git.png'},
		{id: 3, name: 'NPM', image: '../../public/images/logos/NPM.png'},
		{id: 4, name: 'Postman', image: '../../public/images/logos/Postman.png'},
	]

	let lenguajes = '../../public/images/Lenguajes.webp';
</script>

<style>
	section{
		box-sizing: border-box;
		width: 100%;
		max-width: 100vw;
		height: auto;
		padding: 2rem 5rem 2rem 1rem;
	}

	.title{
		text-align: center;
		margin-bottom: 2rem;
	}

	.article__certification{
		max-width: 100%;
		height: 100vh;
		display: grid;
		grid-template: repeat(4, 1fr) / repeat(4, 1fr);
		gap: 1rem;
	}

	.item{
		background: rgba(26, 22, 72, 0.5);
		box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.5), inset -1px -1px 2px #FFFFFF;
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

	.article__skills{
		max-width: 100%;
		height: 100vw;
		display: grid;
		grid-template: repeat(8, 1fr) / repeat(6, 1fr);
		gap: 1rem;
	}

	.preprocesadores{
		grid-column: 1 / 5;
		grid-row: 1 / 3;
	}

	.desing{
		grid-column: 5 / 7;
		grid-row: 1 / 3;
	}

	.FrameworksCss{
		grid-column: 1 / 3;
		grid-row: 3 / 7;
	}

	.FrameworksJs{
		grid-column: 3 / 7;
		grid-row: 3 / 9;
	}

	.Tecnologias{
		grid-column: 1 / 3;
		grid-row: 7 / 9;
	}
	.lenguajes {
		order: 1;
		width: 100%;
		height: auto;
		padding-top: 1rem;
	}

	img{
		width: 100%;
		height: auto;
	}

	@media screen and (min-width: 768px){
		section{
			padding: 2rem;
		}

		.skills__division{
			display: flex;
			width: 100%;
		}

		.article__skills{
			order: 2;
			height: 50vw;
			width: 50%;
		}

		.lenguajes {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	@media screen and (min-width: 1152px){
		section{
			height:100%;
			max-height: 100vh;
			display: flex;
		}

		.certification{
			width: 50%;
			order: 2;
		}

		.article__certification{
			height: 100%;
		}

		.skills{
			width: 50%;
			height: 100%;
			order: 1;
		}
		.skills__division{
			box-sizing: border-box;
			flex-direction: column;
			height: 100%;
		}

		.article__skills{
			order: 1;
			width: 100%;
			height: 50%;
		}

		.lenguajes {
			order: 2;
			height: 50%;
			width: 100%;
		}

		img{
			width: auto;
			height: 100%;
		}
	}
</style>

<section>
	<div class="certification">

		<div class="title" id="certification">
			<h1>{title}</h1>
		</div>

		<article class="article__certification">
			<div class="certificados certification1"><Diploma/></div>
			<div class="certificados certification2"><CertificationModel info={CERTIFICADOS} /></div>
			<div class="certificados certification3"><CertificationModel info={CERTIFICADOS} /></div>
			<div class="certificados certification4"><CertificationModel info={CERTIFICADOS} /></div>
			<div class="certificados certification5"><CertificationModel info={CERTIFICADOS} /></div>
		</article>
	</div>

	<div class="skills">

		<div class="title" id="skills">
			<h1>{title2}</h1>
		</div>

		<div class="skills__division">
			<article class="article__skills">
				<div class="item preprocesadores"><CertificationModel info={PREPROCESADORES}/></div>
				<div class="item desing"><CertificationModel info={DESING}/></div>
				<div class="item FrameworksCss"><CertificationModel info={FRAMEWORKSCSS}/></div>
				<div class="item FrameworksJs"><CertificationModel info={FRAMEWORKSJS}/></div>
				<div class="item Tecnologias"><CertificationModel info={TECNOLOGIAS}/></div>
			</article>

			<div class="lenguajes">
				<img src={lenguajes} alt="leguajes"/>
			</div>

		</div>
	</div>
</section>