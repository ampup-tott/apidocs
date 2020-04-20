/**
 * @api {GET} /service-fee Get Service Fee
 * @apiVersion 0.3.1
 * @apiName Get Service Fee
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Service Fee
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/service-fee \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "id": 4,
 *       "name": "SERVICE_FEE_PERCENT",
 *       "value": "5"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */