import React, { useState, useEffect } from "react";
import Modal from "./Model";


const Challenges = () => {
  const [teamList, setTeamList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  


  const handleChange = (e) => {
    
  };

  

  return (
    <>
            <button
                onClick={() => setShowModal(true)}
                style={{ marginBottom: 20, float: "right" }}
              >
                Create New Team
              </button>
      <h2 className="page-header">Challenge</h2>

      <div className="div card mb-3">
      <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
      </div>
    </>
  );
};

export default Challenges;