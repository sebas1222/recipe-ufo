import Api, { BASE_URL } from ".";

const BASE_URL_INGREDIENT = `${BASE_URL}/api/Ingredientes`;

export default class IngredientsService {
  static async getAllIngredients() {
    try {
      const rsp = await Api.get(`${BASE_URL_INGREDIENT}`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
