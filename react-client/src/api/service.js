const API_URL = "http://localhost:12001/cards";

export async function getAllAPI() {
  return fetch(API_URL + "/getAll")
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}

export async function addcardAPI(todo) {
  return fetch(API_URL + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => data)
    .catch((e) => console.log(e));
}
