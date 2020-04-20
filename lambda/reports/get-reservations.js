/**
 * @api {GET} /reports/reservations Report Reservation
 * @apiVersion 0.3.1
 * @apiName Report Reservation
 * @apiGroup REPORT
 * @apiPermission user
 * @apiDescription Report Reservation
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} last_hours 
 * @apiParam {number} last_days 
 * @apiParam {number} from 
 * @apiParam {number} to 
 * @apiParamExample {json} Params Example
 *   {
 *     "last_hours": 96,
 *     "last_days": 4,
 *     "from": 1547942400,
 *     "to": 1548384093
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reports/reservations?last_hours=96&last_days=4&from=1547942400&to=1548384093 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "id": 1099,
 *       "user_id": 3993,
 *       "user_name": "Hai Pham",
 *       "outlet_id": 8488,
 *       "time_start": 1587369459,
 *       "time_end": 1587371400,
 *       "host_data": {
 *         "user_id": 3993,
 *         "place_id": 4919,
 *         "place_name": "ampUp Vietnam",
 *         "place_phone": "0834123456",
 *         "place_address": "290 An Dương Vương, Phường 4, Quận 5, Hồ Chí Minh, Việt Nam",
 *         "charger_id": 6723,
 *         "charger_name": "#2",
 *         "outlet_id": 8488,
 *         "connector_id": 3,
 *         "price": 5,
 *         "test_mode": null,
 *         "need_confirm": null,
 *         "place_grace_period": 10
 *       }
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */