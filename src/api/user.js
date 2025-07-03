const API_BASE = import.meta.env.VITE_BACKEND_HOST;
const API_PREFIX = import.meta.env.VITE_API_PREFIX;
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

export async function getLibrary(token) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/my-library/books`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Failed to fetch library");
  return await response.json();
}

export async function getOrders(token) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

// profile
export async function updateUser(token, userId, payload) {
  const url = `${API_BASE}${API_PREFIX}/users/${userId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log("Update user response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function updateUserProfile(token, userId, payload) {
  console.log("Making updateUserProfile request with headers", jsonHeaders);
  const url = `${API_BASE}${API_PREFIX}/users/${userId}/profile`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log("Update profile response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function uploadProfileImage(token, userId, imageFile) {
  const url = `${API_BASE}${API_PREFIX}/users/${userId}/profile/image`;

  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "client-web",
      // Don't set Content-Type for FormData - browser will set it automatically with boundary
    },
    body: formData,
  });

  const data = await response.json();

  console.log("Upload image response:", data);

  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function changePassword(token, userId, payload) {
  const url = `${API_BASE}${API_PREFIX}/users/${userId}/change-password`;
  const response = await fetch(url, {
    method: "POST", // veya backend neyi destekliyorsa
    headers: { ...jsonHeaders, Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

export async function deleteUser(token, userId) {
  const url = `${API_BASE}${API_PREFIX}/users/${userId}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || response.statusText);
  }

  return await response.json();
}

export async function placeOrder(token, orderData) {
  const response = await fetch(`${API_BASE}${API_PREFIX}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.error || "Order failed");
  }
  return response.json();
}
