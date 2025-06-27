const API_BASE = "http://localhost:5001";
const API_PREFIX = "/api/v1";
const jsonHeaders = {
  "Content-Type": "application/json",
  "User-Agent": "client-web",
};

export async function addToWishlist(token, bookId) {
  const response = await fetch(
    `${API_BASE}${API_PREFIX}/wishlist/books/${bookId}`,
    {
      method: "POST",
      headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  console.log("Add to wishlist response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}
export async function removeFromWishlist(token, bookId) {
  const response = await fetch(
    `${API_BASE}${API_PREFIX}/wishlist/books/${bookId}`,
    {
      method: "DELETE",
      headers: {
        "User-Agent": "client-web",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  console.log("Remove from wishlist response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function get_user_by_id(token, userId) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/users/${userId}`, {
    method: "GET",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  console.log("Get user by ID response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function addToCart(token, bookId) {
  const response = await fetch(
    `${API_BASE}${API_PREFIX}/cart/books/${bookId}`,
    {
      method: "POST",
      headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();

  console.log("Add to cart response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function removeFromCart(token, bookId) {
  const response = await fetch(
    `${API_BASE}${API_PREFIX}/cart/books/${bookId}`,
    {
      method: "DELETE",
      headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}
export async function getCart(token) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/cart`, {
    method: "GET",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  console.log("Get cart response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

// /cart/clear
export async function clearCart(token) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/cart/clear`, {
    method: "DELETE",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  console.log("Clear cart response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}
