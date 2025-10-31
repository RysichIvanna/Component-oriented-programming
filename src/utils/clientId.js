export function getClientId() {
  const key = "my_app_client_id_v1";
  let id = localStorage.getItem(key);
  if (!id) {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      id = crypto.randomUUID();
    } else {
      id = `id-${Date.now()}-${Math.random().toString(36).slice(2,9)}`;
    }
    localStorage.setItem(key, id);
  }
  return id;
}