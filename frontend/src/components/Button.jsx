export default function Button({children,onclick}){
     return(
     
         <button onClick={onclick} className="btn">{children}</button>
     )
}