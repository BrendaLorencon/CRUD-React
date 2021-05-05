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
          <button className="btn-cancel" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
          <button
            className="btn-ok"
            disabled={disabled}
            onClick={() => {
              onSave();
              setIsOpen(false);
            }}
          >
            Salvar
          </button>
        </footer>
      </div>
    </div>
  );
}
