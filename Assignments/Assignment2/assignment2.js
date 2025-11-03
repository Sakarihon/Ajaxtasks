async function createUser() {
  try {
    const user = {
      name: 'juha',
      job: 'posti',
    };

    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

createUser();
