
const API_URL = "https://cdsapi.netimob.com/api";

async function fetchApi(url, options = {}) {
  try {
    let response = await fetch(url, options);
    if (response.status < 400) {
      return response.json();
    } else {
      throw response;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export default class CallApi {
  static post(url, options) {
    const { body } = options;

    return fetchApi(`${API_URL}${url}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static get(url) {
    return fetchApi(
      `${API_URL}${url}`,
      {
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          "Access-Token": `${localStorage.getItem("accessToken")}`,
        },
      }
    );
  }
}


