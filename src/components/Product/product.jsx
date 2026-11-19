// import './product.css';
import "./product.css"
import productData from "./productdata.jsx";
// import nike from '../../assets/nike.png';

function Product() {
    return (
        <>

            {productData.map((product) => (
                <div className="productCard" key={product.id}>

                    <div className="productImage">
                        {/* <img src={product.image} alt={product.name} /> */}
                    </div>

                    <div className="productInfo">
                        <p className="productCategory">
                            {product.category}
                        </p>

                        <h2 className="productName">
                            {product.name}
                        </h2>

                        <p className="productDescription">
                            {product.description}
                        </p>

                        <div className="productPrice">
                            <span className="newPrice">
                                {product.price}
                            </span>
                        </div>

                        <button className="buyButton">
                            Add to Cart
                        </button>
                    </div>

                </div>
            ))}

        </>
    )
}

export default Product