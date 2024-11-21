import "./index.css";

export function ProductCard (props) {

    const { image, category, title, price } = props.data;

    return (
        <div className="product-card">
            <img src={image} alt="" />
            <p>{category}</p>
            <h4>{title}</h4>

            <div className="product-card__buy-section">
                <div>{price}$</div>
                <button>Add to cart</button>
            </div>
            
        </div>
    );
}