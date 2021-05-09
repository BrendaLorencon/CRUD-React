import Button from "../Button";
import "./modalHiguerIncome.scss"

export default function ModalHiguerIncome({
  rows,
  title,
  children,
  isOpen,
  setIsOpen,
}) {
  if (!isOpen) {
    return <></>;
  }
  
  return (
    <div className="modal-container">
      <div className="modal">
        <header>
          <h1>{title}</h1>
        </header>
        <main>{children}</main>
        <footer>
          <Button  className="btn-close" title="Fechar" onClick={() => setIsOpen(false)}/>
        </footer>
      </div>
    </div>
  ); 
}

