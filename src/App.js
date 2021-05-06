import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import "./AppStyles.scss";
import { FaSearch } from "react-icons/fa";
import Table from "./components/Table";
import { Modal } from "./components/Modal";
import { tableData } from "./AppData";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");
  const [state, setState] = useState("SP");
  const [items, setItems] = useState(tableData);

  // function onDelete(id) => {
  //   const tempDatas = this.state.setItems.filter(item => item.id !== id);
  //   // this.setState({
  //     setItems: tempDatas
  //   })
  // }

  return (
    <>
      <Header />
      <div className="buttons-action">
        <Button title="Incluir" onClick={() => setModalIsOpen(true)} />
        <Button title="Valores por estado" />
        <Button title="Maiores rendas" />
      </div>

      <div className="filter-table">
        <FaSearch></FaSearch>
        <input type="text" placeholder="Busca por nome" />
      </div>

      <Table
        rows={items}
        onDelete={(item) => {
          // eslint-disable-next-line no-restricted-globals
          if (confirm("Você deseja excluir esse registro?")) {
            let index = items.indexOf(item);
            items.splice(index, 1);
            setItems([...items]);
          }
        }}
      />

      <Modal
        isOpen={modalIsOpen}
        title=">Incluir um registro<"
        setIsOpen={setModalIsOpen}
        disabled={!name || !state || !income}
        onSave={() => {
          setItems([
            ...items,
            {
              name,
              state,
              income,
            },
          ]);
        }}
      >
        <div>
          <label>Nome:</label>
          <input
            type="text"
            maxLength="50"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Estado:</label>
          <select
            defaultValue="SP"
            onChange={(event) => setState(event.target.value)}
          >
            <option>SP</option>
            <option>MG</option>
          </select>
        </div>
        <div>
          <label>Renda:</label>
          <input
            type="number"
            value={income}
            onChange={(event) => setIncome(event.target.value)}
          />
        </div>
      </Modal>
    </>
  );
}

export default App;
