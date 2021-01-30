// creates an initial state in the data layer
export const initialState = {
	basket: [],
};

// Selector for total price of items in basket
export const getBasketTotal = basket =>
	basket?.reduce((amount, item) => item.price + amount, 0);

// create a reducer to listen for any changes in the data layer
const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};

		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				basketItem => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can't remove product (id: ${action.id}) as its not in basket!`
				);
			}

			return {
				...state,
				basket: newBasket,
			};

		default:
			return state;
	}
};

export default reducer;
