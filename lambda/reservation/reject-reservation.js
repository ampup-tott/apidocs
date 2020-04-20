/**
 * @api {GET} /reservations/:id/no Reject Reservation
 * @apiVersion 0.3.1
 * @apiName Reject Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Reject Reservation
 * @apiParam {string} code The code reservation
 * @apiParamExample {json} Params Example
 *   {
 *     "code": "e1768a19ac54f1829e2bf856948ac4be"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reservations/417/no?code=e1768a19ac54f1829e2bf856948ac4be \
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