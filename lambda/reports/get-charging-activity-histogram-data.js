/**
 * @api {GET} /reports/histogram-data Report Charging Activity Histogram
 * @apiVersion 0.3.1
 * @apiName Report Charging Activity Histogram
 * @apiGroup REPORT
 * @apiPermission user
 * @apiDescription Report Charging Activity Histogram
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id The id of Place
 * @apiParam {number} from 
 * @apiParam {number} to 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": "6722, 2556",
 *     "from": 1547942400,
 *     "to": 1548384093
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reports/histogram-data?place_id=6722, 2556&from=1547942400&to=1548384093 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "responseData": {
 *         "Sunday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         },
 *         "Monday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         },
 *         "Tuesday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         },
 *         "Wednesday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         },
 *         "Thursday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         },
 *         "Friday": {
 *           "total_kwhs": 0,
 *           "sessions_data": {
 *             "instant_charging_count": 0,
 *             "reservations_count": 0
 *           },
 *           "access_code_data": {}
 *         }
 *       },
 *       "formattedData": {
 *         "Sunday": [],
 *         "Monday": [],
 *         "Tuesday": [],
 *         "Wednesday": [],
 *         "Thursday": [],
 *         "Friday": []
 *       }
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: from"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: to"
 *   }
 */