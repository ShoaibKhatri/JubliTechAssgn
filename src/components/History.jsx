import React from "react";
import "../assets/css/history.css";
import Monitor from "../assets/images/Monitor.png";

const History = () => {
  return (
    <div className="container p-2 mt-3">
      <div className="row ">
        <div className="col-lg-5 col-sm-12 p-2 monitor-main">
          <img src={Monitor} className="monitor-image " alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5 col-sm-12 p-2">
          <div className="history-heading p-2">OUR HISTORY</div>
          <div className="lorem-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsa
            temporibus quasi necessitatibus ex eos culpa, cupiditate sed impedit
            quis doloribus neque vel, esse ducimus.
          </div>
          <div className="lorem-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            reprehenderit expedita animi. Beatae nam animi, corporis expedita
            eligendi blanditiis enim voluptatem repellat vel ducimus minima
            officia quas rerum perferendis incidunt natus libero in praesentium
            inventore facilis tempora voluptates autem nulla.
          </div>
          <div className="browse-btn-main">
            <button className="browse-btn">BROWSE OUR WORK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
