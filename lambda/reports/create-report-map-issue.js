/**
 * @api {POST} /places/report-map-issue Create Report Map Issue
 * @apiVersion 0.3.1
 * @apiName Create Report Map Issue
 * @apiGroup REPORT
 * @apiPermission user
 * @apiDescription Create Report Map Issue
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {number} place_id The id of Place
 * @apiParam {string} issue 
 * @apiParam {object} user_info The info of report's user
 * @apiParamExample {json} Params Example
 *   {
 *     "place_id": 4918,
 *     "issue": "Very Good",
 *     "user_info": {
 *       "name": "Abel Tran",
 *       "email": "ampup.tott@gmail.com"
 *     }
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/places/report-map-issue \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "place_id": 4918,
 *       "issue": "Very Good",
 *       "user_info": {
 *         "name": "Abel Tran",
 *         "email": "ampup.tott@gmail.com"
 *       }
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "place_id": 4918,
 *       "issue": "Very Good",
 *       "status": 1,
 *       "created_by": {
 *         "name": "Abel Tran",
 *         "email": "ampup.tott@gmail.com"
 *       },
 *       "created_at": "1587375309",
 *       "id": "25",
 *       "updated_by": null,
 *       "updated_at": null
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Invalid parameter: place_id."
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: issue"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: userInfo"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Name is required!"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Email is required!"
 *   }
 */