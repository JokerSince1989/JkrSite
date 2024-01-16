import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await fetch('https://api.pouet.net/v1/group/?id=2992', {
		method: 'GET'
	});
	const data: RootObject = await response.json();

	return {
		groupInfo: data
	};
};
