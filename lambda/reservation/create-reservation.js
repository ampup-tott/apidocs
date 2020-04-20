/**
 * @api {POST} /reservations Create Reservation New
 * @apiVersion 0.3.1
 * @apiName Create Reservation New
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Create Reservation
 * @apiParam {string} id The id of reservation
 * @apiParam {number} outlet_id The id outlet
 * @apiParam {number} user_id The id of user
 * @apiParam {number} time_start The start time
 * @apiParam {number} time_end The end time
 * @apiParam {string} time_start_text The start time by text
 * @apiParam {string} time_end_text The end time by text
 * @apiParam {string} duration_text The duration text
 * @apiParam {number} amount 
 * @apiParam {number} day_order The day order
 * @apiParam {string} service_fee 
 * @apiParam {string} service_fee_percent 
 * @apiParam {string} user_payment_id 
 * @apiParam {string} user_payment_id 
 * @apiParam {boolean} is_instant_charging 
 * @apiParam {number} price 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 363,
 *     "outlet_id": 8499,
 *     "user_id": 3996,
 *     "time_start": 1585718175,
 *     "time_end": 1585720800,
 *     "time_start_text": "{\"date\":\"01/04/2020\",\"time\":\"12:02 PM\"}",
 *     "time_end_text": "{\"date\":\"01/04/2020\",\"time\":\"01:00 PM\"}",
 *     "duration_text": "58 minutes",
 *     "amount": 0.9,
 *     "day_order": 3,
 *     "service_fee": 5,
 *     "service_fee_percent": "5",
 *     "user_payment_id": 144,
 *     "is_instant_charging": true,
 *     "price": 15
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reservations \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "outlet_id": 8499,
 *       "user_id": 3996,
 *       "time_start": 1585718175,
 *       "time_end": 1585720800,
 *       "time_start_text": "{\"date\":\"01/04/2020\",\"time\":\"12:02 PM\"}",
 *       "time_end_text": "{\"date\":\"01/04/2020\",\"time\":\"01:00 PM\"}",
 *       "duration_text": "58 minutes",
 *       "amount": 0.9,
 *       "date": 1585674000,
 *       "day_order": 3,
 *       "service_fee": 5,
 *       "service_fee_percent": "5",
 *       "currency": "",
 *       "user_payment_id": 144,
 *       "is_instant_charging": true,
 *       "price": 15
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK"
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */