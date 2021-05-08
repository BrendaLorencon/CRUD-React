import React, { useEffect, useState } from "react";
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
  const [income, setIncome] = useState(null);
  const [state, setState] = useState("SP");
  const [items, setItems] = useState(tableData);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if(!modalIsOpen){
      setName('');
      setState('');
      setIncome('');
      setCurrentItem(null);
    }
  }, [modalIsOpen]);

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
        onEdit={(item) => {
          setModalIsOpen(true);
          setCurrentItem(item);
          setName(item.name);
          setState(item.state);
          setIncome(item.income);
        }}
      />

      <Modal
        isOpen={modalIsOpen}
        title=">Incluir um registro<"
        setIsOpen={setModalIsOpen}
        disabled={!name || !state || !income}
        onSave={() => {

         if(currentItem === null){
          setItems([
            ...items,
            {
              name,
              state,
              income,
            },
          ]);
         }else {

          let index = items.indexOf(currentItem);
          items.splice(index, 1, 
            {
              ...currentItem,
              name,
              state,
              income
          });
          setItems([...items]);
          
        }}}
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
            defaultValue={ state }
            onChange={(event) => setState(event.target.value)}
          >
            
            <option>AC</option>
            <option>SP</option>
            <option>MG</option>
            <option>RJ</option>
            <option>SC</option>
            <option>MS</option>
            <option>PR</option>
            <option>PA</option>
            

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
