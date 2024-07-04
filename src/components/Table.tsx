import './Table.scss'
import EditButton from './EditButton.tsx';
import DeleteButton from './DeleteButton.tsx';

// add create, edit, delete buttons

interface PersonData {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
}
const TableRow = (props: PersonData) => {
    const {
        name,
        birth_year,
        eye_color,
        gender,
        hair_color,
        height,
        mass,
        skin_color } = props;
    return (
        <>
            <span>
                <strong>Name</strong>
            </span>
            <span>
                <strong>Birth Year</strong>
            </span>
            <span>
                <strong>Eye Color</strong>
            </span>
            <span>
                <strong>Gender</strong>
            </span>
            <span>
                <strong>Hair Color</strong>
            </span>
            <span>
                <strong>Height</strong>
            </span>
            <span>
                <strong>Mass</strong>
            </span>
            <span>
                <strong>Skin Color</strong>
            </span>
            <span>
                <strong>Actions</strong>
            </span>

            <span>{name}</span>
            <span>{birth_year}</span>
            <span>{eye_color}</span>
            <span>{gender}</span>
            <span>{hair_color}</span>
            <span>{height}</span>
            <span>{mass}</span>
            <span>{skin_color}</span>
            <span><EditButton/><DeleteButton/></span>
        </>

    )
}
const Table = ({category, items}) => {
    return (
        <div className="grid-table-container">
            <header className="category-name">{category}</header>
            <div className="grid-table">
                {items?.map((props, index) => (
                    <TableRow key={index} {...props}/>
                ))}
            </div>
        </div>
    )
}

export default Table