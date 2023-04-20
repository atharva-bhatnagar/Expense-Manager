import React from "react";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="logo-cont">
        <div>
          <img src="hamMenu.png" alt="menu" />
          <h1>Expense Manager</h1>
        </div>
        <button>Sign Out</button>
      </div>
    </div>
  );
};

export default TopNav;
