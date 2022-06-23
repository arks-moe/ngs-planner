<script>
	import icon from '$lib/icon-paths';
	fetch('/api/augments')
		.then(res => res.json())
		.then(val => console.log(val))
		.catch(console.error);
</script>

<div class="bg-base-300 rounded-box p-2">
	<div class="flex gap-2 items-center">
		<img src={icon.common.augment} alt="Augment" />
		<h3>Gigas Thali X</h3>
		<h4 class="badge badge-outline">+10 BP</h4>
	</div>
</div>
