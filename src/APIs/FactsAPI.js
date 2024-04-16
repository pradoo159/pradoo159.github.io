

export async function doRequest() {
    let response = await fetch('https://dogapi.dog/api/v2/facts?limit=5', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let json = await response.json();
    return json;
}