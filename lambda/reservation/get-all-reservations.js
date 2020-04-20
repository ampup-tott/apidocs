/**
 * @api {GET} /all-reservations All Reservation
 * @apiVersion 0.3.1
 * @apiName All Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription All Reservation
 * @apiParam {number} page 
 * @apiParam {number} limit 
 * @apiParam {number} status The status of reservation
 * @apiParamExample {json} Params Example
 *   {
 *     "page": 1,
 *     "limit": 10,
 *     "status": 6
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/all-reservations?page=1&limit=10&status=6 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK"
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */