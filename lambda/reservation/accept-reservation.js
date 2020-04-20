/**
 * @api {GET} /reservations/:id/yes Accept Reservation
 * @apiVersion 0.3.1
 * @apiName Accept Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Accept Reservation
 * @apiParam {string} id The id of code reservation
 * @apiParam {string} code The code for reservation
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 363,
 *     "code": "e1768a19ac54f1829e2bf856948ac4be"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reservations/363/yes?code=e1768a19ac54f1829e2bf856948ac4be \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK"
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "There is no reservation with the given ID need to be confirmed!"
 *   }
 */