const API_BASE = "http://localhost:5001";

export async function registerUser(payload) {
  const URL = `${API_BASE}/api/v1/auth/register`;
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
 * POST /auth/login
 * @param {Object} payload {email, password}
 * @return {Promise<Object>} {token, user}
 */

export async function loginUser(payload) {
  const url = `${API_BASE}/api/v1/auth/login`;
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
