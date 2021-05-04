import { tableData } from "../../AppData";
import "./styles.scss";

export default function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Estado</th>
          <th width="170px">Ações</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.state}</td>
            <td className="buttons-table">
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
