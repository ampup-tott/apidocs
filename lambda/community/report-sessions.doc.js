/**
 * @api {get} /community/report/session Report Access Code Usage
 * @apiVersion 0.3.1
 * @apiName Report Access Code Usage
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Report access code usage by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} type The group type (hour | day | week | month | year)
 * @apiParam {String} place_id The id of Place
 * @apiParam {String} city The name of city
 * @apiParam {String} from timestamp of start of group type (hour | day | week | month | year)
 * @apiParam {String} to timestamp of end of group type (hour | day | week | month | year)
 * @apiParamExample {json} Param Example
 *  {
 *    "type": "day"
 *    "place_id": 4919
 *    "city": "Vietnam"
 *    "from": 1585414800
 *    "to": 1585674000
 *  }
 * @apiExample {curl} Curl example
 *   curl --request GET \
 *     --url 'http://localhost:6969/community/report/session?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "date": "03/28/2020",
 *         "sessionsTotal": 0,
 *         "breakdown": {
 *           "reservations": 1,
 *           "instant_charging": 0
 *         }
 *       },
 *       {
 *         "date": "03/29/2020",
 *         "sessionsTotal": 1,
 *         "breakdown": {
 *           "reservations": 1,
 *           "instant_charging": 1
 *         }
 *       },
 *       {
 *         "date": "03/30/2020",
 *         "sessionsTotal": 5,
 *         "breakdown": {
 *           "reservations": 5,
 *           "instant_charging": 0
 *         }
 *       },
 *       {
 *         "date": "03/31/2020",
 *         "sessionsTotal": 0,
 *         "breakdown": {
 *           "reservations": 0,
 *           "instant_charging": 2
 *         }
 *       }
 *     ]
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason There is no request with the given ID!
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: type" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: place_id" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: city" 
 *   }
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or Wrong parameter: from" 
 *   }
  * @apiErrorExample Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or Wrong parameter: to" 
 *   }
 */