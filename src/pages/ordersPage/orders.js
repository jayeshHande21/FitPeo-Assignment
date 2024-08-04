import React from 'react';
import './orders.css';
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";

const ordersData = [
  {
    imgSrc: img1,
    name: "Wade Warren",
    orderNumber: "15478256",
    amount: "$124.00",
    status: "Delivered",
    color:"green"

  },
  {
    imgSrc: img2,
    name: "Jane Cooper",
    orderNumber: "48965786",
    amount: "$365.02",
    status: "Cancelled",
     color:"red"

  },
  {
    imgSrc: img3,
    name: "Guy Hawkins",
    orderNumber: "78958215",
    amount: "$8045.88",
    status: "Pending",
    color:"red"
  },
  {
    imgSrc: img4,
    name: "Kristin Watson",
    orderNumber: "20965732",
    amount: "$65.00",
    status: "Delivered",
     color:"green"
  },
  {
    imgSrc: img5,
    name: "Cody Fisher",
    orderNumber: "95715620",
    amount: "$545.00",
    status: "Cancelled",
    color:"red"
  },
  {
    imgSrc: img6,
    name: "Savannah Nguyen",
    orderNumber: "7814568",
    amount: "$128.20",
    status: "Delivered",
     color:"green"
  }
];

const Orders = () => {
  return (
    <div className="table-container">
      <p style={{ padding: "0px", margin: "0px", backgroundColor: "#333", color: "white", paddingLeft: "10px" }}>Recent orders</p>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="header-cell">Customer</th>
            <th className="header-cell">Order Number</th>
            <th className="header-cell">Amount</th>
            <th className="header-cell">Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {ordersData.map((order, index) => (
            <tr key={index}>
              <td className="body-cell">
                <img src={order.imgSrc} alt={order.name} className="customer-image" />
                {order.name}
              </td>
              <td className="body-cell">{order.orderNumber}</td>
              <td className="body-cell">{order.amount}</td>
              <td 
                className="body-cell1" 
                style={{ color: order.color , fontWeight:"bold"}}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
