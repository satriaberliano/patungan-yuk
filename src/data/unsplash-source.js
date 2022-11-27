class UnsplashSource {
  static async getImage(param) {
    const api_key = 'lp1W5Gs6lPRK3yStImVldAIi5U-IO__Zh3SMqgjV2dc';
    const baseURL = 'https://api.unsplash.com/';
    const dafault_param = 'landscape';
    const orientation = 'landscape';
    const color = 'white';

    const response = await fetch(`${baseURL}/search/photos/?client_id=${api_key}&query=${param}&orientation=${orientation}&color=${color}`);
    const responseJson = await response.json();

    if (responseJson.results.length === 0) {
      const defaultImage = await fetch(`${baseURL}/search/photos/?client_id=${api_key}&query=${dafault_param}&orientation=${orientation}&color=${color}`);
      const defaultImageJson = await defaultImage.json();
      const randomDefault = defaultImageJson.results[Math.floor(Math.random() * defaultImageJson.results.length)]
      return randomDefault.urls.regular;
    }
    
    const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
    return random.urls.regular;
  }
}

export default UnsplashSource;