import React, { useState, useEffect } from "react";
import Modal from "./Model";
import './Model.css'
const ChallengesTableHead = [
  "",
  "Challenges_name",
  "leader",
  "co_leader",
//   "members",
  "logo",
  
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index,handleDelete) => (
  <tr key={index}>
    <td></td>
    <td>{item.Challenges_name}</td>
    <td>{item.leader_email}</td>
    <td>{item.co_leader_email}</td>
    <td>{""}</td>
    <td>
            <button className='delete-jery' onClick={() => handleDelete(item._id)}>Delete</button>
    </td>
  </tr>
);

const Challenges = () => {
  
  const [ChallengesList, setChallengesList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {};

  return (
    <div className="container">
      <div className="row">
        {/* Titre fixé à gauche */}
        <div className="col-md-10">
          <h2>Challenge</h2>
        </div>
        {/* Bouton "Ajouter" fixé à droite */}
        <div className="col-md-2 d-flex justify-content-end">
          <button
            onClick={() => setShowModal(true)}
            className="btn btn-primary btn-challenge"
          >
            Ajouter
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              {/* Contenu de la carte ici */}
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <div>Contenu du modal ici</div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
