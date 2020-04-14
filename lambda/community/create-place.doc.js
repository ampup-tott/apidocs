/**
 * @api {post} /community/places Create Place
 * @apiVersion 0.3.1
 * @apiName Create Place
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Create place by user
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {String} name The name of place
 * @apiParam {String} address The address of place
 * @apiParam {String} phone The phone number of user
 * @apiParam {Number} lat The latitude of place
 * @apiParam {Number} lng The longitude of place
 * @apiParam {String} keywords The keywords for place
 * @apiParam {json} data The data of place
 * @apiParamExample {json} Param Example
 *   {
 *       "name": "Abel test",
 *       "address": "522, Trung Chau, My Hiep, Cho Moi, An Giang",
 *       "phone": "+84355933881",
 *       "lat": 10.52,
 *       "lng": 105.22,
 *       "keywords": "test, abel",
 *       "data": {
 *           "instruction": "test test"
 *       }
 *   }
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url http://localhost:6969/community/places \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A' \
 *     --header 'content-type: application/json' \
 *     --data '{
 *       "name": "Abel test",
 *       "address": "522, Trung Chau, My Hiep, Cho Moi, An Giang",
 *       "phone": "+84355933881",
 *       "lat": 10.52,
 *       "lng": 105.22,
 *       "keywords": "test, abel",
 *       "data": {
 *           "instruction": "test test"
 *       }
 *   }'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccess {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Abel test",
 *       "address": "522, Trung Chau, My Hiep, Cho Moi, An Giang",
 *       "phone": "+84355933881",
 *       "lat": 10.52,
 *       "lng": 105.22,
 *       "user_id": 4007,
 *       "keywords": "test, abel",
 *       "status": 1,
 *       "data": {
 *         "instruction": "test test"
 *       },
 *       "created_at": 1585673074,
 *       "id": 4931,
 *       "updated_at": null,
 *       "coordinate": null,
 *       "notes": null,
 *       "plugshare_place_id": null,
 *       "offline": null,
 *       "rating": 0,
 *       "reviews": null,
 *       "created_by": null,
 *       "updated_by": null,
 *       "verified": true,
 *       "donated": false,
 *       "protocol": false,
 *       "host_info": {
 *         "id": 4007,
 *         "name": "Tâm Tỏ Trần",
 *         "email": "ampup.tott@gmail.com",
 *         "phone": "0355933881",
 *         "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png"
 *       }
 *     }
 *   }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error
 * @apiErrorExample Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your station name!" 
 *   }
 * @apiErrorExample Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "What is your station's address?" 
 *   }
 * @apiErrorExample Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Please provive the phone number!" 
 *   }
 * @apiErrorExample Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: lat or lng" 
 *   }
 * @apiErrorExample Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: user_id" 
 *   }
 * @apiErrorExample Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "User host does not exist!" 
 *   }
 */