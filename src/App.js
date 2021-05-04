import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./AppStyles.scss";
import { FaSearch } from "react-icons/fa";
import Table from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
const [ modalIsOpen, setModalIsOpen ] = useState(false);

  return (
    <>
      <Header />
      <div className="buttons-action">
        <Button title="Incluir" onClick={ () => setModalIsOpen(true)}/>
        <Button title="Valores por estado" />
        <Button title="Maiores rendas" />
      </div>

      <div className="filter-table">
        <FaSearch>
        </FaSearch>
          <input type="text" placeholder="Busca por nome" />
      </div>

      <Table />
      <Modal isOpen={modalIsOpen} title=">Incluir um registro<" setIsOpen={ setModalIsOpen }>
        <div >
          <label>Nome:</label>
          <input />
        </div>
        <div >
          <label>Estado:</label>
          <select>
            <option>SP</option>
            <option>MG</option>
          </select>
        </div>
        <div>
          <label>Renda:</label>
          <input />
        </div>
      </Modal >
      
    </>
  );
}

export default App;
