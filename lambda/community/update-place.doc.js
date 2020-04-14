/**
 * @api {put} /community/place/:place_id Update Place
 * @apiVersion 0.3.1
 * @apiName Update Place
 * @apiGroup COMMUNITY  
 * @apiPermission user
 * @apiDescription  Update place by user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} id The id of Place
 * @apiParam {String} name The name of Place.
 * @apiParam {String} address The address of Place.
 * @apiParam {Number} lat The latitude of Place.
 * @apiParam {Number} lng The longitude of Place.
 * @apiParam {String} [keywords] Keywords for Place.
 * @apiParam {json} data Price of all chargers of Place.
 * @apiParamExample {json} Param Example
 *   {
 *     "place_id": 4918
 *   }
 * 
 *   {
 *     "name": "Tui test",
 *     "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *     "lat": 10.7517033,
 *     "lng": 106.6558611,
 *     "keywords": "Tui Test, Do Ngoc Thanh, Abel",
 *     "data": {
 *       "price": 0
 *     }
 *   }
 * @apiExample {curl} Curl example
 *   curl --request PUT \
 *     --url http://localhost:6969/community/place/4918 \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "name": "Tui test",
 *       "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *       "lat": 10.7517033,
 *       "lng": 106.6558611,
 *       "keywords": "Tui Test, Do Ngoc Thanh, Abel",
 *       "data": {
 *         "price": 0
 *       }
 *   }' 
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *  {
 *    "status": "OK",
 *    "data": {
 *      "name": "Tui test",
 *      "address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *      "lat": 10.7517033,
 *      "lng": 106.6558611,
 *      "data": {
 *        "price": 0
 *      },
 *      "keywords": "Tui Test, Do Ngoc Thanh, Abel",
 *      "updated_at": 1585635979,
 *      "id": 4918,
 *      "user_id": 4007,
 *      "status": 1,
 *      "created_at": 1584605422,
 *      "coordinate": null,
 *      "phone": "0355933881",
 *      "notes": null,
 *      "plugshare_place_id": null,
 *      "offline": false,
 *      "rating": 0,
 *      "reviews": null,
 *      "created_by": null,
 *      "updated_by": 4007,
 *      "verified": true,
 *      "donated": true,
 *      "protocol": false
 *    }
 *  }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found or invalid Id" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Cannot read property 'price' of undefined" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: name" 
 *   }
 */