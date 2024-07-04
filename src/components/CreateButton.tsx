import EditBtn from '../assets/edit.svg';

const EditButton = ({ editHandler, rowId, text }) => {
    return (
        <button className="btn edit-btn" title="Edit" onClick={() => editHandler(rowId)}>
            {text && <span className="btn-text">{text}</span>}
            <img src={`${EditBtn}`} alt="Edit"/>
        </button>
    )

}

export default EditButton;