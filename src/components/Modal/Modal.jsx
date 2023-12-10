import './Modal.css';

export const Modal = ({setShowModal,handleZero,closeButton=true,children}) =>{
  const handleClose = (e) =>{
    e.preventDefault();
    setShowModal(false);
    handleZero();
  };

  return (
    <div className="modal">
      <div className="modalContent">
        {closeButton?<span className="close" onClick={handleClose}>&times;</span>:null}
        {children}            
      </div>  
    </div>                
  );
};