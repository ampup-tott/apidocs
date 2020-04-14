/**
 * @api {post} /session Zef Start
 * @apiVersion 0.3.1
 * @apiName Zef Start
 * @apiGroup COMMUNITY
 * @apiPermission none
 * @apiDescription Zef Start
 * @apiParam {String} [apiKey] The apiKey of partner
 * @apiParam {String} sessionId The id of session reservation
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url 'https://api-dev.uptimecharge.com/session/fail?apiKey=api_key&sessionId=abcd1234'
 * @apiSuccess {String} status <code>authorizing</code>
 * @apiSuccessExample {JSON} Success Example
 *   {
 *     "status": "authorizing",
 *     "sessionId": "abcd1234"
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */