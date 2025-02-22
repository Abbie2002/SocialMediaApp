import React, { useEffect } from "react";
import "./AdminDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, deleteUser } from "../../actions/AdminActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;