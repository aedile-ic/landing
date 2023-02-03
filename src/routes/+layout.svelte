<script>
	import Header from '../lib/header/Header.svelte';
	import Footer from '../lib/footer/Footer.svelte';
	import './assets/scss/global.scss';
</script>

<div class="app">
	<Header/>

	<main>
		<slot />
	</main>

	<Footer/>
</div>
