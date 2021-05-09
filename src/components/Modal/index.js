import Button from "../Button";
import "./styles.scss";

export function Modal({
  title,
  children,
  isOpen,
  setIsOpen,
  disabled,
  onSave,
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
            className="btn-cancel"
            title="Cancelar"
            onClick={() => setIsOpen(false)}
          />
          <Button
            className="btn-ok"
            disabled={disabled}
            title="Salvar"
            onClick={() => {
              onSave();
              setIsOpen(false);
            }}
          />
        </footer>
      </div>
    </div>
  );
}
