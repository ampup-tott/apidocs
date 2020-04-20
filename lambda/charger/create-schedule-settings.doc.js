/**
 * @api {POST} /chargers/id/schedule-settings Create Schedule Settings
 * @apiVersion 0.3.1
 * @apiName Create Schedule Settings
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Create Schedule Settings
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} id The id of Charger
 * @apiParam {array} schedules 
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 6722,
 *     "schedules": [
 *       {
 *         "day_order": 0,
 *         "time_start": "07:30",
 *         "time_end": "22:00"
 *       },
 *       {
 *         "day_order": 1,
 *         "time_start": "07:30",
 *         "time_end": "22:00"
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/chargers/6722/schedule-settings \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "schedules": [
 *         {
 *           "day_order": 0,
 *           "time_start": "07:30",
 *           "time_end": "22:00"
 *         },
 *         {
 *           "day_order": 1,
 *           "time_start": "07:30",
 *           "time_end": "22:00"
 *         }
 *       ]
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "time_start": 1587367800,
 *         "time_end": 1587420000,
 *         "updated_at": 1587386466,
 *         "status": 1,
 *         "id": 45441,
 *         "charger_id": 6722,
 *         "day_of_week": "Sunday",
 *         "created_at": 1584605423,
 *         "day_order": 0
 *       },
 *       {
 *         "time_start": 1587367800,
 *         "time_end": 1587420000,
 *         "updated_at": 1587386466,
 *         "status": 1,
 *         "id": 45439,
 *         "charger_id": 6722,
 *         "day_of_week": "Monday",
 *         "created_at": 1584605422,
 *         "day_order": 1
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger not found or invalid parameter!"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter: schedules"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this charger currently. Please cancel those reservations before editing charger."
 *   }
 */