async function fetchUser() {
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchUser();
