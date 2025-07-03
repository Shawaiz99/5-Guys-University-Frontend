import { useState} from "react";
import { useNavigate } from "react-router";
import "./Profile.css";
import ProfileInformation from "./ProfileInformation";
import DeleteAccount from "./DeleteAccount";
import { PiStudentBold } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ChangePassword from "./ChangePassword";
import { get_user_by_id, changePassword, updateUserProfile } from "../../api/user";
import { getDecodedToken, getToken, isTokenValid } from "../../utils/auth";
import { useEffect } from "react";
import { uploadProfileImage } from "../../api/user";
import { useGlobalStore } from "../../hooks/useGlobalStore";



function Profile() {

  const navigate = useNavigate();
  const { dispatch } = useGlobalStore();

  // profile state
  const [profile, setProfile] = useState(null);
  const [activeTab, setActiveTab] = useState("profile"); 

  // edit mode state
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    user_role:"",
  });

  // password change state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordMessage, setPasswordMessage] = useState("");

  // PASSWORD CHANGE HANDLERS

  const handlePasswordChange = (e) => {
      setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
    };

const handlePasswordSubmit = async (e) => {
  e.preventDefault();

  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    setPasswordMessage("New passwords do not match.");
    return;
  }

  if (!passwordForm.currentPassword || !passwordForm.newPassword) {
    setPasswordMessage("Please fill in all password fields.");
    return;
  }

  try {
    const token = getToken();
    await changePassword(token, profile.id, {
      current_password: passwordForm.currentPassword,
      new_password: passwordForm.newPassword,
    });
    setPasswordMessage("Password changed successfully!");
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  } catch (error) {
    setPasswordMessage("Password change failed: " + error.message);
  }
};

   // profile data loading
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = getToken();
        if (!token || !isTokenValid()) {
          console.log("No valid token found");
          navigate("/login");
          return;
        }

        const decodedToken = getDecodedToken();
        if (decodedToken) {
          const userResponse = await get_user_by_id(
            token,
            parseInt(decodedToken.sub)
          );
          console.log("userResponse (initial)", userResponse);

          setProfile({
            ...userResponse.user,          
            ...userResponse.user.profile_information,
          });

          setForm({
            first_name: userResponse.user.profile_information?.first_name || "",
            last_name: userResponse.user.profile_information?.last_name || "",
            username: userResponse.user.username || "",
            email: userResponse.user.email || "",
            user_role: userResponse.user.user_role || "",
          });
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchProfile();
  }, []);

   // PROFILE EDIT HANDLERS

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
  try {
    const token = getToken();

    const profileData = {
      first_name: form.first_name,
      last_name: form.last_name,
      username: form.username,
      email: form.email,
      user_role: form.user_role
    };

    const response = await updateUserProfile(token, profile.id, profileData);

    setEditMode(false);
    setProfile({
      ...profile,
      ...response.profile,
    });
    setForm({
      first_name: response.profile.first_name || "",
      last_name: response.profile.last_name || "",
      username: response.profile.username || "",
      email: response.profile.email || "",
      user_role: response.profile.user_role || "",
    });
    console.log("profile updated", response.profile);
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

const handleEdit = () => {
  setForm({
    first_name: profile.first_name || "",
    last_name: profile.last_name || "",
    username: profile.username || "",
    email: profile.email || "",
    user_role: profile.user_role || "",
  });
  setEditMode(true);
};

const handleAvatarUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    const token = getToken();
    const decoded = getDecodedToken();
    const userId = parseInt(decoded?.sub); // 👈 burada JWT'den ID alınıyor

    const response = await uploadProfileImage(token, userId, file);

    if (response.profile) {
      handleAvatarUpdate(response.profile);
      console.log("Avatar uploaded successfully.");
    } else {
      console.warn("Upload succeeded but profile is missing?", response);
    }
  } catch (e) {
    console.error("Error uploading avatar:", e);
    alert("Failed to upload avatar. Please try again");
  }
};



  const handleAvatarUpdate = (updatedProfile) => {
    setProfile({
      ...profile,
      ...updatedProfile,
    });
  };

  const handleLogOut = () => {
    console.log("Logging out...");
    dispatch({ type: "LOGOUT" });
    navigate("/signin");
  };


  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (<ProfileInformation 
              profile={profile}
              editMode = {editMode} 
              onChange={handleChange}
              onSave={handleSave}
              onCancel={() => setEditMode(false)}
              onEdit={handleEdit}
              form = {form}                          
        />);
      case "setting":
        return (<ChangePassword 
            passwordForm={passwordForm}
            onChange={handlePasswordChange}
            onSubmit={handlePasswordSubmit}
            message={passwordMessage}
        />);
      case "deleteAccount":
        return <DeleteAccount userId={profile.id}/>;
      default:
        return (
          <div className="text-center fs-5 text-gray-600 italic fw-bolder">
            <h2>Well Come Back!</h2>
            🕵️‍♀️ The shelves are empty because you haven’t picked anything...
            <br />
            Go ahead, click a tab and let the page come to life!
          </div>
        );
    }
  };

  if (!profile) {
    return <div className="text-center my-5">Loading profile...</div>;
  }  

  return (
    <div className="container mt-5  border  p-0 col-10 ">
      <main className="p-4 gap-3 col col-md-4 bg-light main-context">
        <div className="d-flex flex-column align-items-center gap-2">
          <div className="img-div mx-auto position-relative">
            <label htmlFor="avatar-upload" style={{ cursor: "pointer" }}>
            <img
            className="img w-100 rounded-circle"
            src={profile.avatar_url ? profile.avatar_url : "/default.jpg"}
            alt="Add Picture"
          />
            {!profile.avatar_url && (
      <div className="overlay">📷 Add Picture</div>
    )}
  </label>
  <input
    id="avatar-upload"
    type="file"
    accept="image/*"
    onChange={handleAvatarUpload}
    style={{ display: "none" }}
  />
</div>
          <h3 className="mx-auto">{profile.first_name} {profile.last_name}</h3>
          <p className="mx-auto">{profile.email}</p>
        </div>
        <div className="d-flex flex-column align-items-start gap-3 ">
          <button
            onClick={() => setActiveTab("profile")}
            className="btn text-left"
          >
            <PiStudentBold /> Profile Information
          </button>
          <button
            onClick={() => setActiveTab("setting")}
            className="btn text-left"
          >
            <CiSettings /> Change Password
          </button>
          <button
            onClick={() => setActiveTab("deleteAccount")}
            className="btn text-left"
          >
            <MdDeleteOutline /> Delete Account
          </button>
          <button className="btn btn-primary py-1 px-3 text-left" onClick={handleLogOut}>
            Sign Out
          </button>
        </div>
      </main>
      <aside className="side-info p-4 p-4 col ">{renderContent()}</aside>
    </div>
  );
}

export default Profile;
