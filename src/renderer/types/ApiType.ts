/**
 * ## Error standard object from API response
 * @description Error type JSON response from API
 * @link https://docs.api.jikan.moe/#section/Information/JSON-Error-Response
 * @param {number} status Returned HTTP Status Code
 * @param {string} type	Thrown Exception
 * @param {string} message	Human-readable error message
 * @param {string} error	Error response and trace from the API
 * @param {string} report_url	Clicking this would redirect you to a generated GitHub issue. ℹ It's only returned on a parser error.
 * */
export type ApiErrorType = {
  status: number;
  type: string;
  message: string;
  error: string;
  report_url: string;
};
