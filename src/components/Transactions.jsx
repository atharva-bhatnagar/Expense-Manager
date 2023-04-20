import React from "react";

const Transactions = () => {
  return (
    <div className="transac">
      <div className="nav">
        <h1>Dashboard</h1>
        <h1>See all Transaction</h1>
        <h1>Investment Calculator</h1>
        <h1>Dashboard</h1>
      </div>
      <div className="t-list">
        <h1>Transactions </h1>
        <form>
          <select>
            <option value="jan">January</option>
            <option value="jan">January</option>
            <option value="jan">January</option>
            <option value="jan">January</option>
          </select>
          <input type="number" placeholder="year" />
        </form>
        <div className="transac-cont-head">
          <h2>Date</h2> <h2>Title</h2>
          <h2>Amount</h2>
        </div>
        <div className="transac-cont">
          <h2>6/5/2022</h2> <h2>Market expense</h2>
          <h2>300</h2>
        </div>
        <div className="transac-cont">
          <h2>10/4/2022</h2> <h2>Groceries</h2>
          <h2>50</h2>
        </div>
        <div className="transac-cont">
          <h2>11/7/2021</h2> <h2>given as a gift</h2>
          <h2>86</h2>
        </div>
        <div className="transac-cont">
          <h2>10/4/2022</h2> <h2>spent on ice cream</h2>
          <h2>40</h2>
        </div>
        <div className="transac-cont">
          <h2>10/4/2022</h2> <h2>Groceries</h2>
          <h2>126</h2>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
