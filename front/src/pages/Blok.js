import React, { useState } from "react";
import "./Blok.css";
import { Link } from "react-router-dom";

import CRUD from "../CRUD";
import Modal from "../Smodal/Modal.js";

function Blok() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div>
      <header>
        <ul className="hr">
          <li>
            {" "}
            <Link to="/">О компании</Link>
          </li>
          <li>Blog</li>
          <li className="avtoriz">
            <button onClick={() => setModalActive(true)}>
              Добавить работника
            </button>
          </li>
        </ul>
      </header>

      <Modal active={modalActive} setActive={setModalActive}></Modal>
      <CRUD />
    </div>
  );
}

export default Blok;
