import ky, { type NormalizedOptions } from 'ky';
import { browser } from '$app/environment';

export const pokeApiHttpClient = (function () {
	return ky.create({
		prefixUrl: 'https://pokeapi.co/api/v2/',
		retry: 0,
		timeout: 60 * 1000, // 1 min

		// Do not use `afterResponse` on the server due to node-fetch bug
		hooks: browser
			? {
					afterResponse: [
						async (request, options, response) => {
							if (!response.ok) {
								response = await handleFailedRequest(request, options, response);
							}

							return response;
						}
					]
				}
			: {}
	});
})();

// AFTER RESPONSE HANDLERS
///////////////////////////////////////////////////////////////////////////////////////////////////

async function handleFailedRequest(
	_request: Request,
	_options: NormalizedOptions,
	response: Response
): Promise<Response> {
	try {
		const body = await response.text();

		console.error(
			`src/api - api request failed [response.url: ${response?.url}][response.status: ${response?.status}][body: ${body}]`,
			{
				url: response.url,
				status: response.status,
				body
			}
		);
	} catch (err) {
		console.error('src/api - api request failed (exception)', {
			url: response.url,
			status: response.status
		});
	}

	return response;
}
