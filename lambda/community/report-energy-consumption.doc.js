/**
 * @api {get} /community/report/energy-consumption Report Energy Consumption
 * @apiVersion 0.3.1
 * @apiName Report Energy Comsumption
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Report energy consumption
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
 *     --url 'http://localhost:6969/community/report/energy-consumption?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "date": "03/28/2020",
 *         "kwh": "5.10"
 *       },
 *       {
 *         "date": "03/29/2020",
 *         "kwh": "10.32"
 *       },
 *       {
 *         "date": "03/30/2020",
 *         "kwh": "15.2"
 *       },
 *       {
 *         "date": "03/31/2020",
 *         "kwh": "2.1"
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