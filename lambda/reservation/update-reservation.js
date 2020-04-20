/**
 * @api {PUT} /reservations/:id Update Reservation
 * @apiVersion 0.3.1
 * @apiName Update Reservation
 * @apiGroup RESERVATION
 * @apiPermission none
 * @apiDescription Update Reservation
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Reservation
 * @apiParam {number} outlet_id The id of outlet
 * @apiParam {number} user_id The id of user
 * @apiParam {number} time_start 
 * @apiParam {number} time_end 
 * @apiParam {number} amount 
 * @apiParam {number} service_fee 
 * @apiParam {number} currency 
 * @apiParam {number} user_payment_id 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 363,
 *     "outlet_id": 2,
 *     "user_id": 1,
 *     "time_start": 1546921552,
 *     "time_end": 1546925152,
 *     "amount": 2,
 *     "service_fee": 1,
 *     "currency": "usd",
 *     "user_payment_id": 1
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/reservations/363 \
 *     --header 'authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "outlet_id": 2,
 *       "user_id": 1,
 *       "time_start": 1546921552,
 *       "time_end": 1546925152,
 *       "amount": 2,
 *       "service_fee": 1,
 *       "currency": "usd",
 *       "user_payment_id": 1
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