/**
 * @api {GET} /reservation-statuses Get Reservation Statuses
 * @apiVersion 0.3.1
 * @apiName Get Reservation Statuses
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Reservation Statuses
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reservation-statuses \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 6,
 *         "name": "InSession",
 *         "desc": "In Session",
 *         "status": 1,
 *         "created_at": 1548602922,
 *         "updated_at": 1548602922
 *       },
 *       {
 *         "id": 2,
 *         "name": "Completed",
 *         "desc": "Completed",
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195
 *       },
 *       {
 *         "id": 1,
 *         "name": "Reserved",
 *         "desc": "Upcoming",
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195
 *       },
 *       {
 *         "id": 5,
 *         "name": "Rejected",
 *         "desc": "Cancelled",
 *         "status": 1,
 *         "created_at": 1548602922,
 *         "updated_at": 1548602922
 *       },
 *       {
 *         "id": 3,
 *         "name": "Canceled",
 *         "desc": "Cancelled",
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195
 *       },
 *       {
 *         "id": 4,
 *         "name": "Pending",
 *         "desc": "Pending Confirmation",
 *         "status": 1,
 *         "created_at": 1548602922,
 *         "updated_at": 1548602922
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */