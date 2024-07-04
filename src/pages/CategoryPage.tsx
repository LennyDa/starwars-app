import {useLocation} from 'react-router-dom';
import Table from '../components/Table.tsx';
import GoBackBtn from '../components/GoBackBtn.tsx';

const CategoryPage = () => {
    const { state } = useLocation();
    const { category, items } = state;

    return (
        <div>
            {items?.length > 0 ? <Table category={category} items={items} /> : <header className="category-name">{category}</header>}
            <GoBackBtn />
        </div>
    )
}

export default CategoryPage