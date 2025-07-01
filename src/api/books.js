const API_BASE = "http://localhost:5001";
const API_PREFIX = "/api/v1";
const jsonHeaders = {
  "Content-Type": "application/json",
  "User-Agent": "client-web",
};
export async function getAllBooks() {
  const URL = `${API_BASE}${API_PREFIX}/books`;
  const response = await fetch(URL, {
    method: "GET",
    headers: jsonHeaders,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}

// @user_bp.route("/users/<int:user_id>", methods=["GET"])
// @jwt_required()
// def get_user(user_id):
//     user = UserService.get_user_by_id(user_id)
//     if not user:
//         return jsonify({"error": "User not found"}), 404
//     return jsonify({"user": user.serialize()}), 200

// export async function get_user_by_id(user_id) {
//   const URL = `${API_BASE}${API_PREFIX}/users/${user_id}`;
//   const response = await fetch(URL, {
//     method: "GET",
//     headers: jsonHeaders,
//   });
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(data.error || response.statusText);
//   }
//   return data;
// }

export async function getBookById(bookId) {
  const URL = `${API_BASE}${API_PREFIX}/books/${bookId}`;
  const response = await fetch(URL, {
    method: "GET",
    headers: jsonHeaders,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || response.statusText);
  }
  return data;
}
