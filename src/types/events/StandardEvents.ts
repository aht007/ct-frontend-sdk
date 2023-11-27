import { ActionError } from "../../library/ActionError";
import { PageError } from "../../library/PageError";

/**
 * The types of standard events and commerce events the base SDK ships with.
 */
export type StandardEvents = {
	productFetched: { product: unknown };
	productsQueried: { query: unknown; result: unknown };
	productCategoriesQueried: { query: unknown; result: unknown };
	searchableProductAttributesFetched: { filterFields: unknown[] };
	projectSettingsFetched: { projectSettings: unknown };
	productAddedToCart: { product: unknown; quantity: number };
	productRemovedFromCart: { product: unknown; quantity: number };
	productUpdatedInCart: { product: unknown; newQuantity: number };
	cartFetched: { cart: unknown };
	cartUpdated: {
		account?: {
			email: string;
		};
		shipping?: unknown;
		billing?: unknown;
	};
	shippingMethodsFetched: { shippingMethods: unknown[] };
	availableShippingMethodsFetched: { shippingMethods: unknown[] };
	shippingMethodUpdated: { shippingMethod: unknown };
	discountCodeRedeemed: { discountCode: string; cart?: unknown };
	discountCodeRemoved: { discountCode: string; cart?: unknown };
	cartCheckedOut: {};
	// orderHistoryFetched: { orders: unknown[] }; // TODO replace with ordersQueried
	accountFetched: { account: unknown };
	userLoggedIn: { account: unknown };
	userLoggedOut: {};
	userRegistered: { account: unknown };
	accountConfirmed?: { account: unknown };
	accountConfirmationEmailRequested?: { email: string };
	passwordChanged: {};
	passwordResetRequested: {};
	passwordReset: {};
	accountUpdated: { account: unknown };
	accountAddressAdded: { address: unknown };
	accountAddressUpdated: { address: unknown };
	accountAddressRemoved: { addressId: string };
	defaultBillingAddressSet: { address: unknown };
	defaultShippingAddressSet: { address: unknown };
	wishlistFetched: { wishlist: unknown };
	lineItemAddedToWishlist: { lineItem: unknown };
	lineItemRemovedFromWishlist: { lineItemId: string };
	wishlistLineItemUpdated: { lineItem: unknown };
	errorCaught: { error: ActionError | PageError };
};
