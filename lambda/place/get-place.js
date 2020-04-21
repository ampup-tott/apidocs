/**
 * @api {GET} /places/:id Get Place
 * @apiVersion 0.3.1
 * @apiName Get Place
 * @apiGroup PLACE
 * @apiPermission user
 * @apiDescription Get Place
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiParam {string} id The id of place
 * @apiParam {boolean} is_public is public station (place)?
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 4918
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/places/4918?is_public=false \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "source": null,
 *       "id": 4918,
 *       "lat": 10.7517033,
 *       "lng": 106.6558611,
 *       "place_name": "Tui test",
 *       "place_address": "Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *       "place_phone": "(XXX) XXX - XXX1",
 *       "description": null,
 *       "offline": false,
 *       "reviews": null,
 *       "verified": true,
 *       "status": 1,
 *       "prot": false,
 *       "host_info": {
 *         "id": 4007,
 *         "name": "Tâm Tỏ Trần",
 *         "email": "ampup.tott@gmail.com",
 *         "phone": "035593388",
 *         "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png"
 *       },
 *       "photos": [
 *         {
 *           "id": 709,
 *           "photo_url": "https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg"
 *         }
 *       ],
 *       "chargers": [
 *         {
 *           "id": 6722,
 *           "name": "Litle",
 *           "level": 3,
 *           "price": 0,
 *           "restricted": null,
 *           "has_solar": true,
 *           "offline": false,
 *           "plugs": [
 *             {
 *               "outlet_id": 8504,
 *               "power": null,
 *               "type": null,
 *               "name": null,
 *               "level": null,
 *               "photo": null,
 *               "available": true,
 *               "status": "AVAILABLE"
 *             }
 *           ],
 *           "status": "AVAILABLE",
 *           "access": "PUBLIC",
 *           "pricing": {
 *             "parking": null,
 *             "charging": [
 *               0,
 *               "hr"
 *             ]
 *           }
 *         },
 *         {
 *           "id": 6734,
 *           "name": "Little 2",
 *           "level": 3,
 *           "price": 0,
 *           "restricted": true,
 *           "has_solar": true,
 *           "offline": false,
 *           "plugs": [
 *             {
 *               "outlet_id": 8511,
 *               "power": 6.6,
 *               "type": 3,
 *               "name": "J1772",
 *               "level": 2,
 *               "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png",
 *               "available": true,
 *               "status": "AVAILABLE"
 *             }
 *           ],
 *           "status": "AVAILABLE",
 *           "access": "RESTRICTED",
 *           "pricing": {
 *             "parking": null,
 *             "charging": [
 *               0,
 *               "hr"
 *             ]
 *           }
 *         }
 *       ],
 *       "bookmarked": true,
 *       "place_address_full": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Saigon, Việt Nam",
 *       "place_phone_full": "0355933881"
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing parameter: id"
 *   }
 * @apiErrorExample {json} Error Example 2
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found"
 *   }
 */