<script>
	let username = "";
	let password = "";
	let error = "";

	function handleLogin() {
		if (!username || !password) {
			error = "Por favor complete los campos!";
			return;
		}

		error = "";
		login()
	}

	async function login() {
		try {
			const resp = await fetch('http://localhost:80/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ 
					email: username,
					password
				})
			})

			const data = await resp.json()

			if (data.ok) {
				localStorage.setItem("user", JSON.stringify(data))
			} else {
       			error = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
			}
		} catch(error) {
			console.log(error)
		}
	}
</script>

<svelte:head>
	<title>Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="body text-column">
	<div class="login-container">
        <h2>Iniciar Sesión</h2>
		{#if error}
			<p class="error">{error}</p>
		{/if}
        <form on:submit={handleLogin}>
            <input type="text" placeholder="Nombre de usuario" bind:value={username}>
            <input type="password" placeholder="Contraseña" bind:value={password}>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
</div>

<style>
	.error {
		color: rgb(224, 105, 105);
		text-align: center;
	}

	.body {
		font-family: Arial, sans-serif;
		background-color: #f4f4f4;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.login-container {
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		padding: 20px;
		width: 300px;
	}

	.login-container h2 {
		text-align: center;
	}

	.login-container form {
		display: flex;
		flex-direction: column;
	}

	.login-container form input {
		margin: 10px 0;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 3px;
	}

	.login-container form button {
		background-color: #007BFF;
		color: #fff;
		border: none;
		border-radius: 3px;
		padding: 10px;
		cursor: pointer;
	}

	.login-container form button:hover {
		background-color: #0056b3;
	}
</style>
