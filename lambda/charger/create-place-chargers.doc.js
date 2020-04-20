/**
 * @api {POST} /places/chargers Create Place Charger
 * @apiVersion 0.3.1
 * @apiName Create Place Charger
 * @apiGroup CHARGER
 * @apiPermission user
 * @apiDescription Create Place Charger
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
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
 *     "name": "Place #3",
 *     "address": "1648 Vo Van Kiet Street",
 *     "phone": "123-345-6677",
 *     "lat": 10.7297857,
 *     "lng": 106.6241775,
 *     "user_id": 4007,
 *     "keywords": "",
 *     "offline": false,
 *     "data": {
 *       "description": ""
 *     },
 *     "chargers": [
 *       {
 *         "name": "Charger #3",
 *         "data": {
 *           "instruction": ""
 *         },
 *         "keywords": "",
 *         "level": 2,
 *         "connectors": [
 *           3
 *         ],
 *         "has_solar": false,
 *         "offline": false,
 *         "restricted": true,
 *         "restricted_reason": "Family used only!"
 *       }
 *     ]
 *   }
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/places/chargers \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 *     --data '{
 *       "name": "Place #3",
 *       "address": "1648 Vo Van Kiet Street",
 *       "phone": "123-345-6677",
 *       "lat": 10.7297857,
 *       "lng": 106.6241775,
 *       "user_id": 4007,
 *       "keywords": "",
 *       "offline": false,
 *       "data": {
 *         "description": ""
 *       },
 *       "chargers": [
 *         {
 *           "name": "Charger #3",
 *           "data": {
 *             "instruction": ""
 *           },
 *           "keywords": "",
 *           "level": 2,
 *           "connectors": [
 *             3
 *           ],
 *           "has_solar": false,
 *           "offline": false,
 *           "restricted": true,
 *           "restricted_reason": "Family used only!"
 *         }
 *       ]
 *     }
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "name": "Place #3",
 *       "address": "1648 Vo Van Kiet Street",
 *       "phone": "123-345-6677",
 *       "lat": 10.7297857,
 *       "lng": 106.6241775,
 *       "user_id": 4007,
 *       "keywords": "",
 *       "status": 1,
 *       "data": {
 *         "description": "",
 *         "reservable": 1,
 *         "reservation_grace_period": 15,
 *         "max_charging_hours": 5,
 *         "overstay_penalty": 0,
 *         "access_restriction": null,
 *         "price": "NaN"
 *       },
 *       "offline": false,
 *       "created_at": 1587382573,
 *       "id": 4958,
 *       "updated_at": null,
 *       "coordinate": null,
 *       "notes": null,
 *       "plugshare_place_id": null,
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
 *         "phone": "035593388",
 *         "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png",
 *         "is_host": true
 *       },
 *       "chargers": [
 *         {
 *           "name": "Charger #3",
 *           "price": null,
 *           "level": 2,
 *           "place_id": 4958,
 *           "provider_id": null,
 *           "data": {
 *             "instruction": ""
 *           },
 *           "keywords": "",
 *           "restricted": true,
 *           "restricted_reason": "Family used only!",
 *           "has_solar": false,
 *           "offline": false,
 *           "status": 1,
 *           "created_at": 1587382573,
 *           "id": 6760,
 *           "updated_at": null,
 *           "notes": null,
 *           "plugshare_charger_id": null,
 *           "created_by": null,
 *           "updated_by": null,
 *           "is_unpluggable": true,
 *           "plugs": [
 *             {
 *               "charger_id": 6760,
 *               "connector_id": 3,
 *               "available": true,
 *               "status": 1,
 *               "created_at": 1587382573,
 *               "id": 8540,
 *               "updated_at": null,
 *               "notes": null,
 *               "plugshare_outlet_id": null,
 *               "created_by": null,
 *               "updated_by": null,
 *               "power": null
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your charger name."
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your charger address."
 *   }
 * @apiErrorExample {json} Error Example 3
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your phone number."
 *   }
 * @apiErrorExample {json} Error Example 4
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: lat or lng"
 *   }
 * @apiErrorExample {json} Error Example 5
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: user_id"
 *   }
 * @apiErrorExample {json} Error Example 6
 *   {
 *     "status": "FAIL",
 *     "reason": "There is no charger's information!"
 *   }
 * @apiErrorExample {json} Error Example 7
 *   {
 *     "status": "FAIL",
 *     "reason": "Please enter your charger name."
 *   }
 * @apiErrorExample {json} Error Example 8
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's price was missing or invalid!"
 *   }
 * @apiErrorExample {json} Error Example 9
 *   {
 *     "status": "FAIL",
 *     "reason": "Charger's level was missing or invalid!"
 *   }
 * @apiErrorExample {json} Error Example 10
 *   {
 *     "status": "FAIL",
 *     "reason": "Please select your charger level and add the charger plug."
 *   }
 * @apiErrorExample {json} Error Example 11
 *   {
 *     "status": "FAIL",
 *     "reason": "User host does not exist."
 *   }
 */