class Effect {
	constructor(name, icon, numericType) {
		this.name = name;
		this.icon = icon;
		this.numericType = numericType;
	}

	formattedValue(value) {
		const sign = value >= 0 ? '+' : '-';
		switch (this.numericType) {
			case '%':
				return `${sign}${value.toLocaleString('en', {
					style: 'percent',
					minimumFractionDigits: 2
				})}`;
			case '+':
				return `${sign}${value.toLocaleString('en', {
					style: 'decimal',
					minimumFractionDigits: 2
				})}`;
			default:
				return `${value.toLocaleString('en', {
					style: 'decimal',
					minimumFractionDigits: 2
				})}`;
		}
	}
}

export default {
	allResist: new Effect('allResist', 'assets/icons/effects/allResist.svg', '%'),
	blindResist: new Effect('blindResist', 'assets/icons/effects/blindResist.svg', '%'),
	burnResist: new Effect('burnResist', 'assets/icons/effects/burnResist.svg', '%'),
	darkPot: new Effect('darkPot', 'assets/icons/effects/darkPot.svg', '%'),
	dmgResist: new Effect('dmgResist', 'assets/icons/effects/dmgResist.svg', '%'),
	expGrind: new Effect('expGrind', 'assets/icons/effects/expGrind.svg', '~'),
	firePot: new Effect('firePot', 'assets/icons/effects/firePot.svg', '%'),
	freezeResist: new Effect('freezeResist', 'assets/icons/effects/freezeResist.svg', '%'),
	hp: new Effect('hp', 'assets/icons/effects/hp.svg', '+'),
	icePot: new Effect('icePot', 'assets/icons/effects/icePot.svg', '%'),
	lightningPot: new Effect('lightningPot', 'assets/icons/effects/lightningPot.svg', '%'),
	lightPot: new Effect('lightPot', 'assets/icons/effects/lightPot.svg', '%'),
	melPot: new Effect('melPot', 'assets/icons/effects/melPot.svg', '%'),
	painResist: new Effect('painResist', 'assets/icons/effects/painResist.svg', '%'),
	panicResist: new Effect('panicResist', 'assets/icons/effects/panicResist.svg', '%'),
	poisonResist: new Effect('poisonResist', 'assets/icons/effects/poisonResist.svg', '%'),
	potFloor: new Effect('potFloor', 'assets/icons/effects/potFloor.svg', '%'),
	pp: new Effect('pp', 'assets/icons/effects/pp.svg', '+'),
	rngPot: new Effect('rngPot', 'assets/icons/effects/rngPot.svg', '%'),
	shockResist: new Effect('shockResist', 'assets/icons/effects/shockResist.svg', '%'),
	tecPot: new Effect('tecPot', 'assets/icons/effects/tecPot.svg', '%'),
	windPot: new Effect('windPot', 'assets/icons/effects/windPot.svg', '%')
};
