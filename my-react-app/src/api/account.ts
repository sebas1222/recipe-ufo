import Api from ".";
import { LoginFormTypes, RegisterFormTypes } from "../interfaces/index.t";

const BASE_URL = "https://localhost:7083/api/Usuarios";

export default class AccountUserService {
  static async getAccount(id: number) {
    try {
      const rsp = await Api.get(`${BASE_URL}/${id}`);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async loginAccount(data: LoginFormTypes) {
    try {
      const rsp = await Api.post(`${BASE_URL}/Login`, data);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async registerAccount(data: RegisterFormTypes) {
    try {
      const rsp = await Api.post(`${BASE_URL}}`, data);
      const rspJson = rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
