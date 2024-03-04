export const BASE_URL = "https://platobackend.azurewebsites.net";

export default class Api {
  static get(URL: string) {
    return fetch(URL, { method: "GET" });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static post(URL: string, data: any) {
    return fetch(URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static put(URL: string, data?: any) {
    return fetch(URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: data && JSON.stringify(data),
    });
  }
  static delete(URL: string) {
    return fetch(URL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
}
