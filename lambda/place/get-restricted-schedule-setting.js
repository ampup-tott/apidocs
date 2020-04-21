/**
 * @api {GET} /places/:place_id/restricted-schedule-settings Get Restricted Schedule Settings
 * @apiVersion 0.3.1
 * @apiName Get Restricted Schedule Settings
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Restricted Schedule Settings
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
 *     --url http://localhost:6969/places/4918/restricted-schedule-settings?day_order=0&date=1583600400 \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "start": 1583611200,
 *         "price": 0,
 *         "is_remembered": false,
 *         "access_code": null
 *       },
 *       {
 *         "id": 1,
 *         "start": 1583613000,
 *         "price": 0,
 *         "is_remembered": false,
 *         "access_code": null
 *       },
 *       {
 *         "id": 2,
 *         "start": 1583620200,
 *         "price": 0,
 *         "is_remembered": false,
 *         "access_code": null
 *       }
 *     ]
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
 *     "reason": "Missing parameter: place_id"
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Schedule is invalid"
 *   }
 */