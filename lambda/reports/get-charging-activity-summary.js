/**
 * @api {GET} /reports/summary Report Charging Activity Summary
 * @apiVersion 0.3.1
 * @apiName Report Charging Activity Summary
 * @apiGroup REPORT
 * @apiPermission user
 * @apiDescription Report Charging Activity Summary
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id The id of Place
 * @apiParam {number} month 
 * @apiParam {number} year 
 * @apiParam {number} from 
 * @apiParam {number} to 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": "6722, 2556",
 *     "month": 3,
 *     "year": 2019,
 *     "from": 1547942400,
 *     "to": 1548384093
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/reports/summary?place_id=6722, 2556&month=3&year=2019&from=1547942400&to=1548384093 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "total_kwhs": 0,
 *       "sessions_data": {
 *         "instant_charging_count": 0,
 *         "reservations_count": 0
 *       },
 *       "access_code_data": {},
 *       "totalPayingSessions": 0,
 *       "totalRevenue": 0,
 *       "averageRevenue": null,
 *       "averageKwhs": null,
 *       "usersData": [],
 *       "averageDailyWeekdaySessionPerOutlet": 0,
 *       "averageDailyWeekendSessionPerOutlet": 0,
 *       "weekdaySessionPerOutlet": [
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0
 *       ],
 *       "weekendSessionPerOutlet": [
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0,
 *         0
 *       ],
 *       "dayWiseGrouping": {},
 *       "reservationsMeta": []
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */