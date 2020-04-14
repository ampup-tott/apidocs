/**
 * @api {get} /community/place/:place_id Get Place
 * @apiVersion 0.3.1
 * @apiName Get Place
 * @apiGroup COMMUNITY
 * @apiPermission user
 * @apiDescription Get place of user.
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {Header} Header-Example
 *   "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A"
 * @apiParam {Number} id The id of Place
 * @apiParamExample {json} Param Example
 *   {
 *     "place_id": 4918
 *   }
 * @apiExample {curl} Curl example  
 *  curl --request GET \
 *    --url http://localhost:6969/community/place/4918 \
 *    --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMxNCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTU4ODEyNTY5MywiaWF0IjoxNTg1NTMzNjkzfQ.xhd_rZuo295gwUIhs3GR1QqG8jiXlqnH4sOoAY__T1A'
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {array} data
 * @apiSuccessExample {json} Success Example
 *  {
 *    "status": "OK",
 *    "data": {
 *      "source": null,
 *      "id": 4918,
 *      "lat": 10.7517033,
 *      "lng": 106.6558611,
 *      "place_name": "Tui Test",
 *      "place_address": "15 Đỗ Ngọc Thạnh, Phường 14, Quận 5, Hồ Chí Minh, Việt Nam",
 *      "place_phone": "0355933881",
 *      "data": {
 *        "description": ""
 *      },
 *      "offline": false,
 *      "reviews": null,
 *      "verified": true,
 *      "host_info": {
 *        "id": 4007,
 *        "name": "Tâm Tỏ Trần",
 *        "email": "ampup.tott@gmail.com",
 *        "phone": "0355933881",
 *        "avatar": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/513.png"
 *      },
 *      "photos": [
 *        {
 *          "id": 709,
 *          "photo_url": "https://s3.amazonaws.com/ampup-dev/place_photos/4918/kzPPyZJc.jpeg"
 *        }
 *      ],
 *      "chargers": [
 *        {
 *          "id": 6722,
 *          "name": "Tui Test",
 *          "level": 3,
 *          "price": 0,
 *          "restricted": null,
 *          "has_solar": true,
 *          "offline": false,
 *          "data": {
 *            "instruction": ""
 *          },
 *          "plugs": [
 *            {
 *              "outlet_id": 8481,
 *              "power": 0,
 *              "type": 5,
 *              "name": "CHAdeMO",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8485,
 *              "power": null,
 *              "type": 8,
 *              "name": "Tesla Supercharger",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8484,
 *              "power": null,
 *              "type": 6,
 *              "name": "SEA Combo CCS",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8482,
 *              "power": null,
 *              "type": 5,
 *              "name": "CHAdeMO",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8483,
 *              "power": null,
 *              "type": 6,
 *              "name": "SEA Combo CCS",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8486,
 *              "power": null,
 *              "type": 8,
 *              "name": "Tesla Supercharger",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            },
 *            {
 *              "outlet_id": 8487,
 *              "power": null,
 *              "type": 8,
 *              "name": "Tesla Supercharger",
 *              "level": 3,
 *              "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png",
 *              "available": true,
 *              "partner": null,
 *              "protocol": null,
 *              "id_tag": null,
 *              "api_key": null,
 *              "loc_id": null,
 *              "port_id": null,
 *              "device_id": null,
 *              "status": "AVAILABLE"
 *            }
 *          ],
 *          "status": "AVAILABLE",
 *          "access": "PUBLIC",
 *          "power": 0,
 *          "pricing": {
 *            "parking": null,
 *            "charging": [
 *              0,
 *              "hr"
 *            ]
 *          },
 *          "partner": null,
 *          "protocol": null,
 *          "api_key": null,
 *          "loc_id": null,
 *          "device_id": null,
 *          "id_tag": null
 *        }
 *      ]
 *    }
 *  }
 * 
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample Error Example
 *   {
 *     "status": "FAIL",
 *     "reason": "Place not found." 
 *   }
 */