import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
					height="600px"
					width="1500px"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="13322123"
						title="Samsung Galaxy A51 Factory Unlocked Cell Phone | 128GB of Storage |
            Long Lasting Battery | Single SIM | GSM or CDMA Compatible | US
            Version | White"
						price={399.99}
						image="https://images-na.ssl-images-amazon.com/images/I/516JYsC4a6L._AC_SY550_.jpg"
						rating={5}
					/>
					<Product
						id="14221232"
						title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
						price={299.99}
						image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"
						rating={3}
					/>
				</div>

				<div className="home__row">
					<Product
						id="12434856"
						title="
            Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)"
						price={599.99}
						image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg"
						rating={4}
					/>
					<Product
						id="12434557"
						title="
            Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
						price={599.99}
						image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
						rating={5}
					/>
					<Product
						id="12434556"
						title="Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
						price={40.99}
						image="https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UY218_.jpg"
						rating={5}
					/>
				</div>

				<div className="home__row">
					<Product
						id="12434534"
						title="Logitech MK345 Wireless Combo Full-Sized Keyboard with Palm Rest and Comfortable Right-Handed Mouse - Black"
						price={799.99}
						image="https://m.media-amazon.com/images/I/61S0sV1a57L._AC_UY218_.jpg"
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
