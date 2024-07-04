import {useNavigate} from 'react-router-dom';

const ViewAllBtn = ({ category, items }) => {
    const navigate = useNavigate();
    const goToCategoryPage=()=> {
        navigate("category-page", {state: {category, items}});
    }

    return (
        <button onClick={() => goToCategoryPage()} className="btn view-btn">View All</button>
    )
}

export default ViewAllBtn