/**
 * @api {DELETE} /reservations/:id Delete Reservation
 * @apiVersion 0.3.1
 * @apiName Delete Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Delete Reservation
 * @apiParam {string} id The id of reservation
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 363
 *   }
 * @apiExample {curl} Curl example
 *  curl --request DELETE \
 *     --url http://localhost:6969/reservations/363 \
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