import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import checkoutBanner from "./images/checkoutbanner.jpg";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img className="checkout__ad" src={checkoutBanner} alt="" />
				<div>
					<h2 className="checkout__title">Your shopping basket</h2>

					{/* map through the items in the basket and display it on checkout page */}
					{basket.map(item => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
					{/* BasketItem */}
					{/* BasketItem */}
					{/* BasketItem */}
					{/* BasketItem */}
					{/* BasketItem */}
				</div>
			</div>

			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
