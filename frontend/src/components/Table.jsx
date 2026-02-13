export default function Table({ columns, column, data = [] }) {
  const cols = columns || column || [];

  return (
    <table className="table">
      <thead>
        <tr>
          {cols.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {cols.map((col, j) => (
              <td key={j}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}