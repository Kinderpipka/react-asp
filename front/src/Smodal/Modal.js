import React from "react";
import "./Modal.css";

function Modal({ active, setActive }) {
    
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <form action="">
          <input type="text" placeholder="Enter Name"  />
          <input type="text" placeholder="Enter age" />
          <input type="text" placeholder="Enter company" />
        </form>

        <button className="btn" onClick={() => setActive(false)}>
          Подтвердить
        </button>
      </div>
    </div>
  );
}

export default Modal;
