
function ChangePassword({
  passwordForm,
  onChange,
  onSubmit,
  message,
}) {

  return (
    <>
        <form className="mt-3" onSubmit={onSubmit}>
          <input
            className="form-control mb-2"
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={passwordForm.currentPassword}
            onChange={onChange}
          />
          <input
            className="form-control mb-2"
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={passwordForm.newPassword}
            onChange={onChange}
          />
          <input
            className="form-control mb-2"
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={passwordForm.confirmPassword}
            onChange={onChange}
          />
          <button 
            className="btn btn-primary" 
            type="submit"
          >
            Change Password
          </button>
          {message && <div className="mt-2">{message}</div>}
        </form>
    </>
  )
}

export default ChangePassword
