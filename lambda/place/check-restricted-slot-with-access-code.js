/**
 * @api {GET} /places/:place_id/check-restricted-slot-with-access-code Check Restrict Slot With Access Code
 * @apiVersion 0.3.1
 * @apiName Check Restrict Slot With Access Code
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Check Restrict Slot With Access Code
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id The id of place
 * @apiParam {number} day_order 
 * @apiParam {string} date 
 * @apiParam {string} access_code 
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918,
 *     "day_order": 6,
 *     "date": "18:30",
 *     "access_code": "abc"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places/4918/check-restricted-slot-with-access-code?day_order=6&date=18:30&access_code=abc \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "time_start": 1583539200,
 *       "time_end": 1583622000,
 *       "day_orders": [
 *         0,
 *         1,
 *         2,
 *         3,
 *         4,
 *         5,
 *         6
 *       ],
 *       "access_code_id": 288,
 *       "access_code_price": 5,
 *       "access_code": "abc"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: date"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: day_order"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: access_code"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found"
 *   }
 * @apiErrorExample {json} Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "Schedule is invalid"
 *   }
 */