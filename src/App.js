import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./AppStyles.scss";
import { FaSearch } from "react-icons/fa";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <div className="buttons-action">
        <Button title="Incluir"/>
        <Button title="Valores por estado" />
        <Button title="Maiores rendas" />
      </div>

      <div className="filter-table">
        <FaSearch>
        </FaSearch>
          <input type="text" placeholder="Busca por nome" />
      </div>

      <Table />
      
    </>
  );
}

export default App;
