import {useNavigate} from 'react-router-dom';

const GoBackBtn = () => {
    const navigate = useNavigate();
    const goBack =()=> {
        navigate(-1);
    }

    return (
        <div className="view-btn-container">
            <button onClick={() => goBack()} className="btn back-btn">Go Back</button>
        </div>
    )
}

export default GoBackBtn