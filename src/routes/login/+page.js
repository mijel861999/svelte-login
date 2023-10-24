

import { error, redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */

export function load({  }) {
    const token = 123123

    console.log(token)
	if (token) {
        throw redirect(302, '/about');
    } 
	
    // throw error(404, 'Not found');
}
