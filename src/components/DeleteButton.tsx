import DeleteBtn from '../assets/trash-can.svg';

const DeleteButton = ({ editHandler, rowId, text }) => {
    return (
        <button className="action-btn delete-btn" title="delete" onClick={() => editHandler(rowId)}>
            {text && <span className="btn-text">{text}</span>}
            <img src={`${DeleteBtn}`} alt="Delete"/>
        </button>
    )

}

export default DeleteButton;