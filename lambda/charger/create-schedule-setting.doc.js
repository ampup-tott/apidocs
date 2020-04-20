/**
 * @api {POST} /schedule-settings Create Schedule Setting
 * @apiVersion 0.3.1
 * @apiName Create Schedule Setting
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Create Schedule Setting
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} charger_id 
 * @apiParam {number} day_order 
 * @apiParam {string} time_start 
 * @apiParam {string} time_end 
 * @apiParamExample {json} Params Example
 *   {
 *     "charger_id": 6734,
 *     "day_order": 2,
 *     "time_start": "07:30",
 *     "time_end": "22:00"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/schedule-settings \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "charger_id": 6734,
 *       "day_order": 2,
 *       "time_start": "07:30",
 *       "time_end": "22:00"
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "charger_id": 6734,
 *       "day_of_week": "Tuesday",
 *       "day_order": 2,
 *       "time_start": 1587367800,
 *       "time_end": 1587420000,
 *       "status": 1,
 *       "created_at": 1587386135,
 *       "id": 45560,
 *       "updated_at": null
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Could not find the charger information!"
 *   }
 */