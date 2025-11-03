async function fetchMissingData() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchNonExistent();
