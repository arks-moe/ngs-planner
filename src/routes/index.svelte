<script>
	import icon from '$lib/icon-paths';
	import ngsEffects from '$lib/effects';
	import { onMount } from 'svelte';
	let augment = {
		name: 'loading...',
		slot: '...',
		bp: '...'
	};
	onMount(() => {
		fetch('/api/augments')
			.then(res => res.json())
			.then(val => {
				const randomIndex = Math.min(val.length - 1, Math.floor(Math.random() * val.length));
				const randomAugment = val[randomIndex];
				const { name, bp, slotName: slot, ...effects } = randomAugment;
				augment = { name, bp, slot, effects };
			})
			.catch(console.error);
	});

	let effects;
	$: effects = augment.effects
		? Object.entries(augment.effects).reduce((previous, current) => {
				const [name, value] = current;
				if (!value) return previous;
				previous.push({ ingame: ngsEffects[name], value: value });
				return previous;
		  }, [])
		: [];
	$: console.log(effects);
</script>

<div class="bg-base-300 rounded-box p-2 max-w-sm">
	<div class="p-1">
		<div class="flex gap-2 items-center flex-wrap">
			<img src={icon.common.augment} alt="Augment" />
			<h3 class="flex-auto break-all">{augment.name}</h3>
			<h4 class="badge badge-outline italic">{augment.slot}</h4>
			<h4 class="badge badge-outline">+{augment.bp} BP</h4>
		</div>
		<ul class="flex gap-2 flex-wrap pt-2 justify-center">
			{#each effects as effect}
				<li class="text-center flex flex-col items-center">
					<img src={effect.ingame.icon} alt={effect.ingame.name} title={effect.ingame.name} />
					{effect.ingame.formattedValue(effect.value)}
				</li>
			{/each}
		</ul>
	</div>
</div>
