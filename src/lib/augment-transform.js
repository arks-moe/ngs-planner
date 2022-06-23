import ngsEffects from './ngs-effects';
export default function (augment) {
	const { name, bp, slotName: slot, ...effects } = augment;
	return {
		name,
		bp,
		slot,
		effects: Object.entries(effects).reduce((previous, current) => {
			const [name, value] = current;
			if (!value) return previous;
			previous.push({ ingame: ngsEffects[name], value: value });
			return previous;
		}, [])
	};
}
