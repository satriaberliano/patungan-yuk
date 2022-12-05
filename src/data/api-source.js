class ApiSource {
  static async getImages(param) {
    const apiKey = 'lp1W5Gs6lPRK3yStImVldAIi5U-IO__Zh3SMqgjV2dc';
    const baseURL = 'https://api.unsplash.com/';
    const orientation = 'landscape';

    const response = await fetch(`${baseURL}/search/photos/?client_id=${apiKey}&query=${param}&orientation=${orientation}`);
    const responseJson = await response.json();

    const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
    return random.urls.regular;
  }
}

export default ApiSource;
