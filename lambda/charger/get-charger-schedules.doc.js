/**
 * @api {GET} /chargers/:id/schedule-settings Get Charger Schedules Settings
 * @apiVersion 0.3.1
 * @apiName Get Charger Schedules Settings
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Get Charger Schedules Settings
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Charger
 * @apiParam {number} day_order 
 * @apiParam {number} date 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 6722,
 *     "day_order": 4,
 *     "date": 1547485200
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/chargers/6722/schedule-settings?day_order=4&date=1547485200 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 45441,
 *         "charger_id": 6722,
 *         "day_of_week": "Sunday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 0,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45439,
 *         "charger_id": 6722,
 *         "day_of_week": "Monday",
 *         "status": 1,
 *         "created_at": 1584605422,
 *         "updated_at": 1584628654,
 *         "day_order": 1,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45443,
 *         "charger_id": 6722,
 *         "day_of_week": "Tuesday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 2,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45444,
 *         "charger_id": 6722,
 *         "day_of_week": "Wednesday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 3,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45445,
 *         "charger_id": 6722,
 *         "day_of_week": "Thursday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 4,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45442,
 *         "charger_id": 6722,
 *         "day_of_week": "Friday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 5,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       },
 *       {
 *         "id": 45440,
 *         "charger_id": 6722,
 *         "day_of_week": "Saturday",
 *         "status": 1,
 *         "created_at": 1584605423,
 *         "updated_at": 1584628654,
 *         "day_order": 6,
 *         "time_start": 1584604800,
 *         "time_end": 1584648000
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */