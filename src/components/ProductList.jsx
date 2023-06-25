const ProductList = ({ product ,addToCart}) => {
    return (
        <>
            <div className="flex">
                {product.map((productItem, index) => {
                    return (
                        <>
                            <div style={{ width: "50%" }}>
                                <div className="product_item">
                                    <img src={productItem.url} width="100%" />
                                    <p>
                                        {productItem.name} |{" "}
                                        {productItem.category}
                                    </p>
                                    <p>{productItem.seller}</p>
                                    <p>Rs. {productItem.price} /-</p>
                                    <button
                                        className="add-to-cart-button"
                                        onClick={() => addToCart(productItem)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default ProductList;
