import "./styles.scss"

export function Modal ({ title, children, isOpen, setIsOpen }) {

  if (!isOpen) {
    return <></>
  }

  return(
    <div className="modal-container">
      <div className="modal">
        <header>
          <h1>{ title }</h1>
        </header>
        <main>
          { children }
        </main>
        <footer>
          <button className="btn-cancel" onClick={ () => setIsOpen(false) }>Cancelar</button>
          <button className="btn-ok">Ok</button>
        </footer>
      </div>
    </div>
  )
}