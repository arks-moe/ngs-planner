import db from '$lib/db';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const augments = await db.augment.findMany();
	return {
		body: augments
	};
}
