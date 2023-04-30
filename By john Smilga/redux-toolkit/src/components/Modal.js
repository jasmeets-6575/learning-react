const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h1>Remove all items from your shopping cart ?</h1>
        <div className="btn-container">
          <button type="button" className="btn confirm-btn">
            confirm
          </button>
          <button type="button" className="btn clear-btn">
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
