export function createSafe(datas) {
  console.log("action js ", datas);
  return { type: "createSafe", payload: datas };
}
