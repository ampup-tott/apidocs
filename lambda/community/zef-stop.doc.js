/**
 * @api {put} /session Zef Stop
 * @apiVersion 0.3.1
 * @apiName Zef Stop
 * @apiGroup COMMUNITY
 * @apiPermission none
 * @apiDescription Zef stop
 * @apiParam {String} [apiKey] The apiKey of partner
 * @apiParam {String} sessionId The id of session reservation
 * @apiExample {curl} Curl example
 *   curl --request PUT \
 *     --url 'http://localhost:6969/session'
 * @apiSuccess {String} status <code>stopped</code>
 * @apiSuccessExample {JSON} Success Example
 *   {
 *     "status": "stopped",
 *     "sessionId": "abcd1234"
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */