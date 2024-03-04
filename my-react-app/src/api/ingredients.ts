import Api from ".";

const BASE_URL = "https://localhost:7083/api/Ingredientes";

export default class IngredientsService {
  static async getAllIngredients() {
    try {
      const rsp = await Api.get(`${BASE_URL}`);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
