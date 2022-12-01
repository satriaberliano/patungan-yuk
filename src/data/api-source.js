class ApiSource {
  static async getQuotes() {
    const api_key = 'Sc7xoVI31tmWoJruUSG1LQ==sVAe9UzgTZLqeW3q';
    const baseURL = 'https://api.api-ninjas.com/v1/';
    const param = 'money';

    const response = await fetch(`${baseURL}quotes?category=${param}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': api_key,
      },
      contentType: 'application/json'
    });
    const responseJson = response.json();
    return responseJson;
  }

  static async getImages() {
    const api_key = 'lp1W5Gs6lPRK3yStImVldAIi5U-IO__Zh3SMqgjV2dc';
    const baseURL = 'https://api.unsplash.com/';
    const param = 'white';
    const orientation = 'landscape';
    const color = 'white';

    const response = await fetch(`${baseURL}/search/photos/?client_id=${api_key}&query=${param}&orientation=${orientation}&color=${color}`);
    const responseJson = await response.json();
    
    const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
    return random.urls.regular;
  }
}

export default ApiSource;