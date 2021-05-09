import Button from "../Button";
import "./modalValuesStates.scss";

export default function ModalValuesStates({
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
          <Button
            className="btn-close"
            title="Fechar"
            onClick={() => setIsOpen(false)}
          />
        </footer>
      </div>
    </div>
  );
}
