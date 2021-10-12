export function createSafe(datas) {
  console.log("action js ", datas);
  return { type: "createSafe", payload: datas };
}
export function deleteSafe(index) {
  console.log("deletesafe");
  return { type: "deleteSafe", payload: index };
}
export function updateSafe(data) {
  console.log("action payload", data);
  return { type: "updateSafe", payload: data };
}
export function createSecret(secret) {
  console.log("action payload", secret);
  return { type: "createSecret", payload: secret };
}

export function getSecret(safeId) {
  console.log("action getSecret", safeId);
  return { type: "getSecret", payload: safeId };
}
