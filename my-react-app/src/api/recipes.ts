import Api, { BASE_URL } from ".";
import { RecipeToDB } from "../interfaces/index.t";

const BASE_URL_RECIPES = `${BASE_URL}/api/Recetas`;

export default class RecipeService {
  static async getRecipes() {
    try {
      const rsp = await Api.get(`${BASE_URL_RECIPES}`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async createRecipe(data: RecipeToDB) {
    try {
      const rsp = await Api.post(`${BASE_URL_RECIPES}`, data);

      return "creado";
    } catch (error) {
      console.log(error);
    }
  }
}
