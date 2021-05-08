import "./table.scss";

export default function Table( { rows, onDelete, onEdit } ) {


  return (
    <table>
      <thead id="table-dados">
        <tr>
          <th width="500px">Nome</th>
          <th width="500px">Estado</th>
          <th width="200px">Ações</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.state}</td>
            <td className="buttons-table">
              <button onClick={ () => onEdit(item) }>Editar</button>
              <button onClick={() => onDelete(item)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
