import queryString from "query-string";

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
    throw new Error(await error.json());
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

  static get(url, options = {}) {
    const { params } = options;
    const queryStringParams = {
      ...params,
    };
    return fetchApi(
      `${API_URL}${url}/${queryString.stringify(queryStringParams)}`,
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

//   login = async function() {
//     try {
//       let requestToken = await CallApi.get("/authentication/token/new");
//       let validation = await CallApi.post(
//         "/authentication/token/validate_with_login",
//         {
//           body: {
//             username: this.state.username,
//             password: this.state.password,
//             request_token: requestToken.request_token
//           }
//         }
//       );
//       let authentication = await CallApi.post("/authentication/session/new", {
//         body: {
//           request_token: validation.request_token
//         }
//       });
//       let user = await CallApi.get("/account", {
//         params: {
//           session_id: authentication.session_id
//         }
//       });
//       this.props.updateAuth({user: user, session_id: authentication.session_id});
//       this.setState({
//         submitting: false
//       });
//     } catch (error) {
//       this.setState({
//         submitting: false,
//         errors: {
//           base: error.status_message
//         }
//       });
//     }
//   };
