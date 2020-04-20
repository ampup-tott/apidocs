/**
 * @api {PUT} /places/:id/chargers Update Place Charger
 * @apiVersion 0.3.1
 * @apiName Update Place Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Update Place Charger
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {undefined} undefined undefined
 * @apiParam {string} name The name of Place
 * @apiParam {string} address 
 * @apiParam {string} phone 
 * @apiParam {number} lat The Latitude
 * @apiParam {number} lng The Longitude
 * @apiParam {number} user_id The id of user
 * @apiParam {string} keywords 
 * @apiParam {boolean} offline is offline charger?
 * @apiParam {object} data 
 * @apiParam {array} chargers The data of chargers
 * @apiParamExample {json} Params Example
 *   {
 *     "name": "Test 2 nha",
 *     "address": "217 Hồng Bàng, Phường 11, Quận 5, Hồ Chí Minh, Việt Nam",
 *     "phone": "987",
 *     "lat": 10.7549448,
 *     "lng": 106.6630339,
 *     "user_id": 3997,
 *     "keywords": null,
 *     "data": {
 *       "description": null
 *     },
 *     "chargers": [
 *       {
 *         "id": 6703,
 *         "name": "Test 2 nha",
 *         "data": {
 *           "instruction": null
 *         },
 *         "level": "1",
 *         "price": "12",
 *         "connectors": [
 *           {
 *             "id": 4,
 *             "outlet_id": null
 *           },
 *           {
 *             "id": 4,
 *             "outlet_id": 8170
 *           },
 *           {
 *             "id": 7,
 *             "outlet_id": 8171
 *           },
 *           {
 *             "id": 3,
 *             "outlet_id": 8169
 *           }
 *         ],
 *         "has_solar": false,
 *         "restricted": false,
 *         "offline": false
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request PUT \
 *     --url http://localhost:6969/places/4875/chargers \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "user_id": 3997,
 *       "name": "Test 2 nha",
 *       "address": "217 Hồng Bàng, Phường 11, Quận 5, Hồ Chí Minh, Việt Nam",
 *       "phone": "987",
 *       "lat": 10.7549448,
 *       "lng": 106.6630339,
 *       "keywords": null,
 *       "data": {
 *         "description": null
 *       },
 *       "chargers": [
 *         {
 *           "id": 6703,
 *           "name": "Test 2 nha",
 *           "data": {
 *             "instruction": null
 *           },
 *           "level": "1",
 *           "price": "12",
 *           "connectors": [
 *             {
 *               "id": 4,
 *               "outlet_id": null
 *             },
 *             {
 *               "id": 4,
 *               "outlet_id": 8170
 *             },
 *             {
 *               "id": 7,
 *               "outlet_id": 8171
 *             },
 *             {
 *               "id": 3,
 *               "outlet_id": 8169
 *             }
 *           ],
 *           "has_solar": false,
 *           "restricted": false,
 *           "offline": false
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
 *     "reason": "Place not found or invalid Id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "There is no charger's information!"
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "There are reservations on this charger currently. Please cancel those reservations before editing charger."
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's name was missing or invalid!"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's price was missing or invalid!"
 *   }
 * @apiErrorExample {json} Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "Please choose at least one plug for the charger!"
 *   }
 * @apiErrorExample {json} Error Example 7
 *   {
 *     "status": "FAIL",
 *     "reason": "User host does not exist!"
 *   }
 */