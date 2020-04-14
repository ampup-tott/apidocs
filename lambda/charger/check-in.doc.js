/**
 * @api {post} /chargers/:id/check-in-v2 Check-in V2
 * @apiVersion 0.3.1
 * @apiName Check-in V2
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Check-in V2
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} id The id of Charger
 * @apiParam {Number} reservation_id The id of Reservation
 * @apiParam {Number} stall_id The id of outlet
 * @apiParamExample {json} Param Example
 *   {
 *      "id": 6722
 *   }
 * 
 *   {
 *      "reservation_id": 1019,
 *      "stall_id": 8491
 *   }
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url http://localhost:6969/chargers/6722/check-in-v2 \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "reservation_id": 1019,
 *       "outlet_id": 8491
 *   }'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {JSON} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "status": "start",
 *       "uid": 4007,
 *       "reservation_id": 1019,
 *       "id": 326,
 *       "cp_url": "/Delta/M1806E7TG",
 *       "charger_id": 6722,
 *       "cp_status": "Available",
 *       "id_tag": "tag_delta_id123",
 *       "is_send_noti_charging": false,
 *       "outlet_id": 8502,
 *       "cdata": {},
 *       "partner": "Delta",
 *       "protocol": "ocpp"
 *     }
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing charger id" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing reservation id" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Your reservation has been checked in"
 *   }
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Reservation is wrong!"
 *   }
 * @apiErrorExample Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Outlet is wrong!"
 *   }
 */