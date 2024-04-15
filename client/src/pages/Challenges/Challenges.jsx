import React, { useState, useEffect } from "react";
import Modal from "./Model";


const Challenges = () => {
  const [teamList, setTeamList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  


  const handleChange = (e) => {
    
  };

  

  return (
    <div>
      <h2 className="page-header">Challenge</h2>
      <button
                onClick={() => setShowModal(true)}
                style={{ marginBottom: 20, float: "right" }}
              >
                Create New Team
              </button>
      <div className="row">
        <div className="col-12">
            
          <div className="card">
            <div className="card__body">
             
             
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <div>hhkkkk</div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;