/**
 * @api {GET} /schedule-settings Get Schedule Settings
 * @apiVersion 0.3.1
 * @apiName Get Schedule Settings
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Get Schedule Settings
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} day_order 
 * @apiParam {number} date 
 * @apiParam {number} outlet_id 
 * @apiParamExample {json} Params Example
 *   {
 *     "day_order": 4,
 *     "date": 1583341200,
 *     "outlet_id": 8504
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/schedule-settings?day_order=4&date=1583341200&outlet_id=8504 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "settings": [
 *         {
 *           "id": 45445,
 *           "day_of_week": "Thursday",
 *           "day_order": 4,
 *           "time_start": 1584604800,
 *           "time_end": 1584648000
 *         }
 *       ],
 *       "available": [
 *         {
 *           "time_start": 1583370000,
 *           "time_end": 1583413200
 *         }
 *       ],
 *       "reservations": [],
 *       "max_charging_hours": null
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing paramenter: outlet_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing paramenter: date"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing paramenter: date_order"
 *   }
 */