class Effect {
	constructor({ key, name, icon, numericType }) {
		this.key = key;
		this.name = name;
		this.icon = icon;
		this.numericType = numericType;
	}

	formattedValue(value) {
		const sign = value >= 0 ? '+' : '';
		switch (this.numericType) {
			case '%':
				return `${sign}${(value / 100).toLocaleString('en', {
					style: 'percent',
					minimumFractionDigits: 2
				})}`;
			case '+':
				return `${sign}${value.toLocaleString('en', {
					style: 'decimal'
				})}`;
			default:
				return `${value.toLocaleString('en', {
					style: 'decimal',
					minimumFractionDigits: 2
				})}`;
		}
	}
}

const effectObjects = [
	{
		key: 'allResist',
		name: 'allResist',
		icon: 'assets/icons/effects/allResist.svg',
		numericType: '%'
	},
	{
		key: 'blindResist',
		name: 'blindResist',
		icon: 'assets/icons/effects/blindResist.svg',
		numericType: '%'
	},
	{
		key: 'burnResist',
		name: 'burnResist',
		icon: 'assets/icons/effects/burnResist.svg',
		numericType: '%'
	},
	{
		key: 'darkPot',
		name: 'darkPot',
		icon: 'assets/icons/effects/darkPot.svg',
		numericType: '%'
	},
	{
		key: 'dmgResist',
		name: 'dmgResist',
		icon: 'assets/icons/effects/dmgResist.svg',
		numericType: '%'
	},
	{
		key: 'expGrind',
		name: 'expGrind',
		icon: 'assets/icons/effects/expGrind.svg',
		numericType: '~'
	},
	{
		key: 'firePot',
		name: 'firePot',
		icon: 'assets/icons/effects/firePot.svg',
		numericType: '%'
	},
	{
		key: 'freezeResist',
		name: 'freezeResist',
		icon: 'assets/icons/effects/freezeResist.svg',
		numericType: '%'
	},
	{
		key: 'hp',
		name: 'hp',
		icon: 'assets/icons/effects/hp.svg',
		numericType: '+'
	},
	{
		key: 'icePot',
		name: 'icePot',
		icon: 'assets/icons/effects/icePot.svg',
		numericType: '%'
	},
	{
		key: 'lightningPot',
		name: 'lightningPot',
		icon: 'assets/icons/effects/lightningPot.svg',
		numericType: '%'
	},
	{
		key: 'lightPot',
		name: 'lightPot',
		icon: 'assets/icons/effects/lightPot.svg',
		numericType: '%'
	},
	{
		key: 'melPot',
		name: 'melPot',
		icon: 'assets/icons/effects/melPot.svg',
		numericType: '%'
	},
	{
		key: 'painResist',
		name: 'painResist',
		icon: 'assets/icons/effects/painResist.svg',
		numericType: '%'
	},
	{
		key: 'panicResist',
		name: 'panicResist',
		icon: 'assets/icons/effects/panicResist.svg',
		numericType: '%'
	},
	{
		key: 'poisonResist',
		name: 'poisonResist',
		icon: 'assets/icons/effects/poisonResist.svg',
		numericType: '%'
	},
	{
		key: 'potFloor',
		name: 'potFloor',
		icon: 'assets/icons/effects/potFloor.svg',
		numericType: '%'
	},
	{
		key: 'pp',
		name: 'pp',
		icon: 'assets/icons/effects/pp.svg',
		numericType: '+'
	},
	{
		key: 'rngPot',
		name: 'rngPot',
		icon: 'assets/icons/effects/rngPot.svg',
		numericType: '%'
	},
	{
		key: 'shockResist',
		name: 'shockResist',
		icon: 'assets/icons/effects/shockResist.svg',
		numericType: '%'
	},
	{
		key: 'tecPot',
		name: 'tecPot',
		icon: 'assets/icons/effects/tecPot.svg',
		numericType: '%'
	},
	{
		key: 'windPot',
		name: 'windPot',
		icon: 'assets/icons/effects/windPot.svg',
		numericType: '%'
	}
];

export default effectObjects.reduce((prev, current) => {
	prev[current.key] = new Effect(current);
	return prev;
}, {});
