/**
 * @api {get} /community/report/access-code-usage Report Access Code Usage
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
 *     --url 'http://localhost:6969/community/report/access-code-usage?type=day&place_id=4919&city=Vietnam&from=1585414800&to=1585674000' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "date": "03/29/2020",
 *         "access_code_data": {}
 *       },
 *       {
 *         "date": "03/30/2020",
 *         "access_code_data": {
 *           "public": 1
 *         }
 *       },
 *       {
 *         "date": "03/31/2020",
 *         "access_code_data": {
 *           "public": 5
 *         }
 *       },
 *       {
 *         "date": "04/01/2020",
 *         "access_code_data": {}
 *       }
 *     ]
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason There is no request with the given ID!
 * @apiErrorExample Error Example
 *   {
 *     "status": "FAIL",
 *     "reason": "Wrong type" 
 *   }
 */