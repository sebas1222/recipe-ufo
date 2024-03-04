import Api, { BASE_URL } from ".";
import { LoginFormTypes, RegisterFormTypes } from "../interfaces/index.t";

const BASE_URL_ACCOUNT = `${BASE_URL}/api/Usuarios`;

export default class AccountUserService {
  static async getAccount(id: number) {
    try {
      const rsp = await Api.get(`${BASE_URL_ACCOUNT}/${id}`);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async loginAccount(data: LoginFormTypes) {
    try {
      const rsp = await Api.post(`${BASE_URL_ACCOUNT}/Login`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
  static async registerAccount(data: RegisterFormTypes) {
    try {
      const rsp = await Api.post(`${BASE_URL_ACCOUNT}`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log(error);
    }
  }
}
