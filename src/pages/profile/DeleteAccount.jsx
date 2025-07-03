import { useState } from "react";
import { useNavigate } from "react-router";
import { getToken } from "../../utils/auth";
import { deleteUser } from "../../api/user";

function DeleteAccount({ userId }) {
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!confirm) {
      alert("Please confirm before deleting your account.");
      return;
    }
    if (
      !window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone!"
      )
    )
      return;
    try {
      const token = getToken();
      await deleteUser(token, userId);
      localStorage.removeItem("token");
      navigate("/signin");
    } catch (err) {
      alert("Account could not be deleted: " + err.message);
    }
  };

  return (
    <div className="">
      <h2 className="text-center">Delete Your Account</h2>
      <p className="text-gray-700 mb-4">
        Deleting your university library account will remove your borrowing
        history, reservations, and saved books. This action{" "}
        <strong>cannot be undone</strong>.
      </p>

      <label className="flex items-center mb-4 ">
        <input
          type="checkbox"
          className="m-2"
          checked={confirm}
          onChange={() => setConfirm(!confirm)}
        />
        I understand the consequences of deleting my account.
      </label>

      <button
        onClick={handleDelete}
        className="btn btn-danger p-2 col col-sm-8"
      >
        Permanently Delete Account
      </button>
    </div>
  );
}

export default DeleteAccount;
