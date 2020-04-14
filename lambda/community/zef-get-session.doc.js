/**
 * @api {get} /session Zef Get Session
 * @apiVersion 0.3.1
 * @apiName Zef Get Session
 * @apiGroup COMMUNITY
 * @apiPermission none
 * @apiDescription Zef get session
 * @apiParam {String} [apiKey] The apiKey of partner
 * @apiParam {String} sessionId The id of session reservation
 * @apiParamExample {json} Param Example
 *   {
 *     "apiKey": "api_key",
 *     "sessionId": "abcd1234"
 *   }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'https://api-dev.uptimecharge.com/session/fail?apiKey=api_key&sessionId=abcd1234'
 * @apiSuccess {String} status <code>charging</code>
 * @apiSuccess {String} sessionId The id of session reservation
 * @apiSuccessExample {JSON} Success Example
 *   {
 *     "status": "charging",
 *     "sessionId": "abcd1234"
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */