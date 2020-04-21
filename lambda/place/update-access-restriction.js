/**
 * @api {PUT} /places/:place_id/access-restriction Update Restriction
 * @apiVersion 0.3.1
 * @apiName Update Restriction
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Update Restriction
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
 *         "name": "AR1",
 *         "access_codes": [
 *           "test"
 *         ],
 *         "time_start": "08:00",
 *         "time_end": "17:00",
 *         "prices": {
 *           "thang": 35
 *         },
 *         "day_orders": [
 *           1,
 *           3,
 *           4
 *         ],
 *         "access_restriction_id": 10,
 *         "description": "...."
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/places/4918/access-restriction?place_id=4918 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "schedules": [
 *         {
 *           "name": "AR1",
 *           "access_codes": [
 *             "test"
 *           ],
 *           "time_start": "08:00",
 *           "time_end": "17:00",
 *           "prices": {
 *             "thang": 35
 *           },
 *           "day_orders": [
 *             1,
 *             3,
 *             4
 *           ],
 *           "access_restriction_id": 10,
 *           "description": "...."
 *         }
 *       ]
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK"
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found or invalid parameter!"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: name"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: access_restriction_id"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter: prices"
 *   }
 * @apiErrorExample {json} Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "Day order must be a value of 0..6!"
 *   }
 * @apiErrorExample {json} Error Example 7
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter values: time_start and/or time_end!"
 *   }
 * @apiErrorExample {json} Error Example 8
 *   {
 *     "status": "FAIL",
 *     "reason": "Access code has existed at this time frame on the selected days. Please choose a different code or a different time frame."
 *   }
 */