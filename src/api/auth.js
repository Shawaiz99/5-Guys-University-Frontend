const API_BASE = import.meta.env.VITE_BACKEND_HOST;
const API_PREFIX = import.meta.env.VITE_API_PREFIX;
export async function registerUser(payload) {
  const URL = `${API_BASE}${API_PREFIX}/auth/register`;
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    const error = data.error || "";
    const message = data.message || "";
    throw new Error(`${error} ${message}`);
  }
  console.log(data);
  return data;
}

/**
 * POST /auth/signin
 * @param {Object} payload {email, password}
 * @return {Promise<Object>} {token, user}
 */

export async function signinUser(payload) {
  const url = `${API_BASE}${API_PREFIX}/auth/signin`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    const error = data.error || "";
    const message = data.message || "";
    throw new Error(`${error} ${message}`);
  }
  if (!data.token || !data.user) {
    const errorMessage = data.error || "No token or user received from server.";
    throw new Error(errorMessage);
  }
  return data;
}
