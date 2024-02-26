import Api from ".";
import { RecipeAddFormTypes } from "../interfaces/index.t";

const BASE_URL = "https://localhost:7083/api/Recetas";

export default class AccountRecipeService {
  static async getRecipes() {
    try {
      const rsp = await Api.get(`${BASE_URL}`);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async createRecipe(data: RecipeAddFormTypes) {
    try {
      const rsp = await Api.post(`${BASE_URL}`, data);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
