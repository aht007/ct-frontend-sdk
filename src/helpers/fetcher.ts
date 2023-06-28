import { DEFAULT_SESSION_LIFETIME } from "../constants/defaultSessionLifetime";
import { CookieHandler } from "../cookieHandling";
import { ServerOptions } from "../cookieHandling/types";
import { rememberMeCookie } from "../helpers/cookieManagement";
import { FetchError } from "../library/FetchError";

const cookieHandler = new CookieHandler();

export const fetcher = async <T>(
	url: string,
	options: RequestInit,
	serverOptions?: ServerOptions,
	sessionLifetime?: number
): Promise<T | FetchError> => {
	const sessionCookie =
		(cookieHandler.getCookie(
			"frontastic-session",
			serverOptions
		) as string) ?? "";

	const incomingHeaders: { [key: string]: any } = serverOptions?.req
		? { ...serverOptions.req.headers }
		: {};
	delete incomingHeaders["host"];
	delete incomingHeaders["cookie"];

	options.headers = {
		"Content-Type": "application/json",
		Accept: "application/json",
		"X-Frontastic-Access-Token": "APIKEY",
		...(options.headers || {}),
		...(sessionCookie ? { "Frontastic-Session": sessionCookie } : {}),
		...incomingHeaders,
	};

	const response: Response = await fetch(url, options);

	if (response.ok && response.headers.has("Frontastic-Session")) {
		let rememberMe = rememberMeCookie.get();
		let expiryDate;

		if (rememberMe) {
			expiryDate = new Date(
				Date.now() + (sessionLifetime ?? DEFAULT_SESSION_LIFETIME)
			);
		}

		cookieHandler.setCookie(
			"frontastic-session",
			response.headers.get("Frontastic-Session")!,
			{ expires: expiryDate, ...(serverOptions ?? {}) }
		);
	}

	if (response.ok) {
		return response.json();
	}

	let error: Error | string;

	try {
		error = await response.clone().json();
	} catch (e) {
		error = await response.text();
	}

	return new FetchError(error);
};
