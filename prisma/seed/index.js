import { PrismaClient } from '@prisma/client';
import data from './data.js';
const prisma = new PrismaClient();
async function runSeeder() {
	await Promise.all(
		data.map(async (e) => {
			// Upsert slot prop
			await prisma.slot.upsert({
				create: { name: e.slot },
				where: {
					name: e.slot
				},
				update: {}
			});

			// Insert augment
			await prisma.augment.upsert({
				create: {
					name: e.name,
					slotName: e.slot,
					bp: e.bp,
					hp: e.hp,
					pp: e.pp,
					melPot: e.melPot,
					rngPot: e.rngPot,
					tecPot: e.tecPot,
					potFloor: e.potFloor,
					dmgResist: e.dmgResist,
					burnResist: e.burnResist,
					freezeResist: e.freezeResist,
					shockResist: e.shockResist,
					blindResist: e.blindResist,
					panicResist: e.panicResist,
					poisonResist: e.poisonResist,
					painResist: e.painResist,
					allResist: e.allResist,
					firePot: e.firePot,
					icePot: e.icePot,
					lightningPot: e.lightningPot,
					windPot: e.windPot,
					lightPot: e.lightPot,
					darkPot: e.darkPot,
					lowTempResist: e.lowTempResist,
					daytimePot: e.daytimePot,
					nighttimePot: e.nighttimePot,
					expGrind: e.expGrind
				},
				where: { name: e.name },
				update: {}
			});
		})
	);
}

runSeeder()
	.then(() => console.log('seed successful'))
	.catch(console.error);
