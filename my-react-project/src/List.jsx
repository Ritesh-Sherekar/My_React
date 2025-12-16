import PropTypes from "prop-types";

function List(props) {

    const fruitList = props.list.map((fruit, index) => (
        <li key={index}>
            {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
    ));

    return (
        <div className="main">
            <h2 className="heading">{props.categories}</h2>
            <ol className="list-item">{fruitList}</ol>
        </div>
    );
}

List.defaultProps = {
    categories: "Categories",
    list: [],
};

List.propTypes = {
    categories: PropTypes.string,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number,
        })
    ),
};

export default List;
