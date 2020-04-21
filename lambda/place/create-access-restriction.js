/**
 * @api {POST} /places/4918/access-restriction Create Access Restriction
 * @apiVersion 0.3.1
 * @apiName Create Access Restriction
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Create Access Restriction
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id 
 * @apiParam {object} schedules 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918,
 *     "schedules": [
 *       {
 *         "name": "jbl3",
 *         "access_codes": [
 *           "jbl3",
 *           "sony3"
 *         ],
 *         "time_start": "12:00",
 *         "time_end": "24:00",
 *         "prices": {
 *           "jbl2": 17,
 *           "sony2": 12
 *         },
 *         "day_orders": [
 *           1,
 *           3
 *         ]
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/places/:place_id/access-restriction \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "schedules": [
 *         {
 *           "name": "jbl3",
 *           "access_codes": [
 *             "jbl3",
 *             "sony3"
 *           ],
 *           "time_start": "12:00",
 *           "time_end": "24:00",
 *           "prices": {
 *             "jbl2": 17,
 *             "sony2": 12
 *           },
 *           "day_orders": [
 *             1,
 *             3
 *           ]
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
 *         "name": "jbl3",
 *         "description": null,
 *         "place_id": 4918,
 *         "day_orders": [
 *           1,
 *           3
 *         ],
 *         "day_of_weeks": [
 *           "Monday",
 *           "Wednesday"
 *         ],
 *         "time_start": 1587470400,
 *         "time_end": 1587513600,
 *         "status": 1,
 *         "created_at": 1587442079,
 *         "updated_at": 1587442079,
 *         "id": 176,
 *         "codes": [
 *           {
 *             "access_restriction_id": 176,
 *             "access_code": "jbl3",
 *             "price": null,
 *             "status": 1,
 *             "created_at": 1587442079,
 *             "updated_at": 1587442079,
 *             "id": 317
 *           },
 *           {
 *             "access_restriction_id": 176,
 *             "access_code": "sony3",
 *             "price": null,
 *             "status": 1,
 *             "created_at": 1587442079,
 *             "updated_at": 1587442079,
 *             "id": 318
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: name"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter: prices"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter: access_codes"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Day order must be a value of 0..6!"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter values: time_start and/or time_end!"
 *   }
 * @apiErrorExample {json} Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter values: time_start and/or time_end!"
 *   }
 * @apiErrorExample {json} Error Example 7
 *   {
 *     "status": "FAIL",
 *     "reason": "Access code has existed at this time frame on the selected days. Please choose a different code or a different time frame."
 *   }
 */