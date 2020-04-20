/**
 * @api {GET} /station/get-station-for-web Get Station For Web
 * @apiVersion 0.3.1
 * @apiName Get Station For Web
 * @apiGroup STATION
 * @apiPermission none
 * @apiDescription Get Station For Web
 * @apiParam {number} lat_min 
 * @apiParam {number} lat_max 
 * @apiParam {number} lng_min 
 * @apiParam {number} lng_max 
 * @apiParam {number} zoom 
 * @apiParam {number} available 
 * @apiParam {string} connectors 
 * @apiParam {string} networks 
 * @apiParamExample {json} Params Example
 *   {
 *     "lat_min": -90,
 *     "lat_max": 32,
 *     "lng_min": -91,
 *     "lng_max": 31.5,
 *     "zoom": 5,
 *     "available": "1",
 *     "connectors": "1,2,3",
 *     "networks": "1,17,0"
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/station/get-station-for-web?lat_min=-90&lat_max=32&lng_min=-91&lng_max=31.5&zoom=5&networks=1,17,0&available=1&connectors=1,2,3 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "group_type": "geopoint",
 *         "lat_min": 27.166244094260037,
 *         "lat_max": 29.486711961217225,
 *         "lng_min": -81.55905805528164,
 *         "lng_max": -80.22691707126796,
 *         "centroid": {
 *           "type": "Point",
 *           "coordinates": [
 *             -81.29924068102308,
 *             28.5203718783598
 *           ]
 *         },
 *         "total": 268
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */