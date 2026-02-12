export default function Chart({data=[10,20,30], labels=["A","B","C"]}){
    return(
        <div className="chart">
            {labels.map((label,i)=>{
                <div key={i}>
                    {label}:{data[i]}
                </div>
            })}
        </div>
    );
}