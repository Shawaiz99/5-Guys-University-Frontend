

function ProfileInformation({
  form, 
  onChange, 
  onSave, 
  onCancel,
  editMode,
  profile,
  onEdit
}) {

  return (
    <div className="flex-column">
      {editMode ? (
        <>
          <h3 className="text-center">Editing Mode Activated</h3>
          <div className="mb-2">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="first_name" 
                value={form.first_name}
                onChange={onChange}
                />
          </div>
          <div className="mb-2">
            <label htmlFor="last_name" className="form-label">
              Last Name:
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="last_name" 
                value={form.last_name}
                onChange={onChange}
                />
          </div>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="username" 
                value={form.username}
                onChange={onChange}
                />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="email" 
                value={form.email}
                onChange={onChange}
                />
          </div>
          <div className="mb-2">
            <label htmlFor="user_role" className="form-label">
              User Role:
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="user_role" 
                value={form.user_role}
                onChange={onChange}
                />
          </div>
          <button className="btn btn-success my-2 me-2 px-3" onClick={onSave}>Save</button>
          <button className="btn btn-secondary me-2 px-2" onClick={onCancel}>Cancel</button>
        </>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-4">Profile Information</h2>
            <div>
              <button
                className="btn btn-primary me-2 py-1 px-4"
                onClick={() => onEdit(true)}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="">
            <p className="mb-2">Full Name</p>
            <h5 className="mb-4">{profile.first_name} {profile.last_name}</h5>
          </div>
          <div className="">
            <p className="mb-2">Username</p>
            <h5 className="mb-4">{profile.username}</h5>
          </div>
          <div>
            <p className="mb-2">Email Address</p>
            <h5 className="mb-4">{profile.email}</h5>
          </div>
          <div>
            <p className="mb-2">Merber Since</p>
            <h5 className="mb-4">{profile.created_at}</h5>
          </div>
          <div>
            <p className="mb-2">User Role</p>
            <h5 className="mb-4">{profile.user_role}</h5>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileInformation;
