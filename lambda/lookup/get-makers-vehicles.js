/**
 * @api {GET} /makers/:id/vehicles Get Maker's Vehicle
 * @apiVersion 0.3.1
 * @apiName Get Maker's Vehicle
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Maker's Vehicle
 * @apiParam {number} id The id of maker
 * @apiParamExample {json} Params Example
 *   {
 *     "id": 23
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/makers/23/vehicles \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 167,
 *         "maker_id": 23,
 *         "maker_name": "Tesla",
 *         "maker_logo": null,
 *         "model": "Model S 85",
 *         "year": "2013",
 *         "color": "Matte Purple",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/vehicle/Tesla/imgTeslaMattePurple%403x.jpg",
 *         "connector_id": 8,
 *         "connector_name": "Tesla Supercharger",
 *         "connector_level": 3,
 *         "connector_photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png",
 *         "connector_power": 50,
 *         "colors": [
 *           {
 *             "id": 1,
 *             "name": "Matte Purple"
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */