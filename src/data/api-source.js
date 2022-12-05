class ApiSource {
  static async getImages(param) {
    // using unsplash api
    const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
    const baseURL = 'https://api.unsplash.com/';
    const orientation = 'landscape';

    const response = await fetch(`${baseURL}/search/photos/?client_id=${apiKey}&query=${param}&orientation=${orientation}`);
    const responseJson = await response.json();

    const random = responseJson.results[Math.floor(Math.random() * responseJson.results.length)];
    return random.urls.regular;
  }
}

export default ApiSource;
