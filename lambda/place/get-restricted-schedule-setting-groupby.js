/**
 * @api {GET} /places/:place_id/restricted-schedule-settings-groupby Get Restricted Schedule Settings GroupBy
 * @apiVersion 0.3.1
 * @apiName Get Restricted Schedule Settings GroupBy
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Restricted Schedule Settings GroupBy
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id 
 * @apiParam {number} day_order 
 * @apiParam {number} date 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918,
 *     "day_order": 0,
 *     "date": 1583600400
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places/4918/restricted-schedule-settings-groupby?day_order=0&date=1583600400 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 157,
 *         "place_id": 4918,
 *         "day_of_week": "Saturday",
 *         "status": 1,
 *         "created_at": 1577176834,
 *         "updated_at": 1577267052,
 *         "day_order": 6,
 *         "time_start": 1577232000,
 *         "time_end": 1577314800,
 *         "access_code": "abc",
 *         "price": null
 *       },
 *       {
 *         "id": 151,
 *         "place_id": 4918,
 *         "day_of_week": "Sunday",
 *         "status": 1,
 *         "created_at": 1577176834,
 *         "updated_at": 1577267051,
 *         "day_order": 0,
 *         "time_start": 1577232000,
 *         "time_end": 1577314800,
 *         "access_code": "abc",
 *         "price": null
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: place_id"
 *   }
 */