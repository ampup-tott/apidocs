/**
 * @api {PUT} /reservations/:id/cancel Cancel Reservation
 * @apiVersion 0.3.1
 * @apiName Cancel Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Cancel Reservation
 * @apiParam {string} id The id of code reservation
 * @apiParam {number} user_id The id of user
 * @apiParam {string} message The message
 * @apiParam {boolean} is_host is host?
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 363,
 *     "user_id": 24,
 *     "message": "The charger is not available at that time!",
 *     "is_host": true
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/reservations/363/cancel \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "user_id": 24,
 *       "message": "The charger is not available at that time!",
 *       "is_host": true
 *     }
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
 *     "reason": "Sorry, you do not allow to cancel this reservation! You must do it 30 minutes before charging time."
 *   }
 */