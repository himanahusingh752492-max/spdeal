import React, { useEffect, useState } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
const ProfilePageDark = () => {
const navigate=useNavigate()
const [data,setData] = useState(null);

useEffect(()=>{

const getUser = async () => {

const res = await fetch("http://localhost:4000/user",{
credentials:"include"
});

const user = await res.json();
console.log(user)
setData(user);

}

getUser();

},[]);
const logout = async () => {
  await fetch("http://localhost:4000/logout", {
    method: "POST",
    credentials: "include"
  });

  navigate("/register");
};
return (
<div className="dark-body">

<header className="header-dark">
<div className="brand-dark">SmartPick Deals</div>

<div className="greeting-dark">
Welcome, <span className="username-dark">{data?.name}</span>!
</div>

</header>

<section className="profile-card-dark">

<img 
src="https://via.placeholder.com/100"
alt="Profile"
className="profile-pic-dark"
/>

<h2 className="username-large-dark">{data?.name}</h2>

<p className="email-dark">{data?.email}</p>
<p className="email-dark">Totalearning: {data?.earning}</p>
{/* 
<div className="stats-dark">

{/* <div className="stat-dark">
<span className="stat-number-dark">24</span>
<span className="stat-label-dark">Orders</span>
</div>

<div className="stat-dark">
<span className="stat-number-dark">15</span>
<span className="stat-label-dark">Favorites</span>
</div>

<div className="stat-dark">
<span className="stat-number-dark">5</span>
<span className="stat-label-dark">Coupons</span>
</div>

</div> */} 

<div className="actions-dark">
<button className="btn-edit-dark">Edit Profile</button>
<a href="#" style={{background:"red",color:"white",padding:"10px 20px",borderRadius:"5px", textDecoration:"none"}} onClick={logout}>
  Logout
</a>
</div>

</section>
</div>
);

};

export default ProfilePageDark;