const Header = ({ count,handleShow }) => {
    return (
        <>
            <div className="flex shopping_cart">
                <div className="click" onClick={() => handleShow(true)}>Shopping Cart</div>
                <div className="click" onClick={() => handleShow(false)}>
                    Cart
                    <sup>{count}</sup>
                </div>
            </div>
        </>
    );
};

export default Header;
