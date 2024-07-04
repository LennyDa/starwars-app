import ViewAllBtn from './ViewAllBtn.tsx';
import './List.scss';
const List = ({filteredListByCategories, items}) => {
    return (
        <div className="category-container">
            {filteredListByCategories.map(category => (<div key={category}>
                <header className="category-name">{category}</header>
                <div className="category-items">{items[category].map(details => <div key={details?.url}>{details?.name || details?.title}</div>)}</div>
                    {items[category].length > 0 && <ViewAllBtn category={category} items={category === 'people' ? items[category] : null} />}
                </div>)
            )}
        </div>
    )
}

export default List