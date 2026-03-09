import React from "react";
import "./profile.css";

const ProfilePageDark = () => {
  const user = {
    name: "Himanshu Singh",
    email: "himanshu@example.com",
    orders: 24,
    favorites: 15,
    coupons: 5,
    profilePic: "https://via.placeholder.com/100",
  };

  return (
    <div className="dark-body">
      {/* Header */}
      <header className="header-dark">
        <div className="brand-dark">SmartPick Deals</div>
        <div className="greeting-dark">
          Welcome, <span className="username-dark"></span>!
        </div>
      </header>

      {/* Profile Card */}
      <section className="profile-card-dark">
        <img src={user.profilePic} alt="Profile" className="profile-pic-dark" />
        <h2 className="username-large-dark"></h2>
        <p className="email-dark">{user.email}</p>

        {/* Stats */}
        <div className="stats-dark">
          <div className="stat-dark">
            <span className="stat-number-dark"></span>
            <span className="stat-label-dark">Orders</span>
          </div>
          <div className="stat-dark">
            <span className="stat-number-dark"></span>
            <span className="stat-label-dark">Favorites</span>
          </div>
          <div className="stat-dark">
            <span className="stat-number-dark"></span>
            <span className="stat-label-dark">Coupons</span>
          </div>
        </div>

        {/* Actions */}
        <div className="actions-dark">
          <button className="btn-edit-dark">Edit Profile</button>
          <button className="btn-logout-dark">Logout</button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePageDark;