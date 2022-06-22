const { PrismaClient } = require('@prisma/client');
import data from './data.js';
const prisma = new PrismaClient();
async function runSeeder() {
	await Promise.all(
		data.map(async (e) => {
			// Upsert slot prop
			// Insert augment
		})
	);
}
