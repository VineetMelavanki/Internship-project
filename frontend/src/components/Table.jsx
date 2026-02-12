export default function Table({column=[],data=[]}){
    return(
        <table className="table">
        <thead>
            <tr>
                {column.map((col,i)=>(
                    <th key={i}>{col}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row,i)=>{
                <tr key={i}>
                    {column.map((col,j)=>{
                        <td key={j}>{row[col]}</td>
                    })}
                </tr>
            })}
        </tbody>
        </table>
    );
}