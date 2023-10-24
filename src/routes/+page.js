
export async function load({ fetch }) {
	const resp = await fetch('http://localhost:80/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ 
			email: 'usuario542@example.com',
			password: 'contraseña'
		})
	})

	const data = await resp.json()
	

	if (!data.ok) {
		throw redirect(303, '/login')
	}

	return {
		data
	}
}
