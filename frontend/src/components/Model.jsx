export default function Modal({title,children,isOpen,onClose}){
    if(!isOpen)
    {
        return null;
    }
    return(
        <div className="modal-overlay">
         <div className="modal">
         {title && <h3>{title}</h3>}
         <div>{children}</div>
         <button onClick={onClose}>Close</button>
         </div>
        </div>
    );
}