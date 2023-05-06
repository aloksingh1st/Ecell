import React, { forwardRef, useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = forwardRef((props, ref) => {
  const [active, setActive] = useState();
  const stateChanger = (c) => {
    setActive(c);

  };
  const path = window.location.pathname.split('/')[2];
  console.log(path)
  useEffect(()=>{
    setActive(path);
  }, [path])
  return (
    <>
      <div className="sidebar">
        <div className="logoholder">
          <img src="../images/logoo.png" alt="" />
        </div>
        <ul>
          <li onClick={()=> {stateChanger("Home");
        window.location.href = "/blogs/Home"}} className={active === "Home" ? "active":null}>
            <a href="/blogs">Home</a>
          </li>
          <li onClick={()=> {stateChanger("create")
        window.location.href = "/blogs/create"}} className={active === "create" ? "active":null}>
            <a href="/blogs/create">Create</a>
          </li>
          <li onClick={()=> {stateChanger("View")
        window.location.href = "/blogs/View"}} className={active === "View" ? "active":null}>
            <a href="/blogs/view">View</a>
          </li>
          <li>
            <a href="/blogs">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
});

export default Sidebar;
