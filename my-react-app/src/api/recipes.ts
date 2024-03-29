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
      console.log(rsp);
      return "okey";
    } catch (error) {
      console.log(error);
    }
  }
  static async getOneRecipe(id: number) {
    try {
      const rsp = await Api.get(`${BASE_URL_RECIPES}/${id}`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
