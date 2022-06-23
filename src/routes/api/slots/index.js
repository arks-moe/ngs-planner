import db from '$lib/db';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const slots = await db.slot.findMany({
		include: {
			augments: true
		}
	});
	return {
		body: slots
	};
}
