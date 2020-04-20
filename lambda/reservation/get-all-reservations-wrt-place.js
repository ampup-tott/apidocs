/**
 * @api {DELETE} /:place_id/all-reservations All Reservation of Place
 * @apiVersion 0.3.1
 * @apiName All Reservation of Place
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription All Reservation of Place
 * @apiParam {number} place_id The id of place
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 363
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/363/all-reservations \
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