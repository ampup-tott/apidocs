/**
 * @api {GET} host-reservations Host Reservation
 * @apiVersion 0.3.1
 * @apiName Host Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Host Reservation
 * @apiParam {number} host_id The id of host User
 * @apiParam {number} page 
 * @apiParam {number} limit 
 * @apiParamExample {json} Params Example
 *   {
 *     "host_id": 57,
 *     "page": 1,
 *     "limit": 50
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969host-reservations?host_id=57&page=1&limit=50 \
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