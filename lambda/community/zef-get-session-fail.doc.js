/**
 * @api {get} /session/fail Zef Get Session Fail
 * @apiVersion 0.3.1
 * @apiName Zef Get Session Fail
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Zef get session fail
 * @apiParam {String} [apiKey] The apiKey of partner
 * @apiParam {String} sessionId The id of session reservation
 * @apiParamExample {json} Param Example
 *   {
 *     "apiKey": "api_key",
 *     "sessionId": "abcd1234"
 *   }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'http://localhost:6969/session?apiKey=api_key&sessionId=abcd1234'
 * @apiSuccess {String} status <code>timeout</code>
 * @apiSuccess {String} sessionId The id of session reservation
 * @apiSuccessExample {JSON} Success Example
 *   {
 *     "status": "timeout",
 *     "sessionId": "abcd1234"
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */