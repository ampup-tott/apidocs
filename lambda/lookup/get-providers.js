/**
 * @api {GET} /providers Get Providers
 * @apiVersion 0.3.1
 * @apiName Get Providers
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Providers
 * @apiParam {number} version 
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/providers?version=0 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 19,
 *         "name": "EV Connect",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_EVConnect_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1550673055,
 *         "updated_at": 1550673055,
 *         "source": "ev_connect",
 *         "version": 0
 *       },
 *       {
 *         "id": 20,
 *         "name": "Electrify America",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_ElectrifyAmerica_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1550673404,
 *         "updated_at": 1550673404,
 *         "source": "electrify_america",
 *         "version": 0
 *       },
 *       {
 *         "id": 1,
 *         "name": "ChargePoint",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Chargepoint_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "chargepoint",
 *         "version": 0
 *       },
 *       {
 *         "id": 5,
 *         "name": "Aerovironment",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Aerovironment_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "aerovironment",
 *         "version": 0
 *       },
 *       {
 *         "id": 8,
 *         "name": "OP Connect",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_OPConnect_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "opconnect",
 *         "version": 0
 *       },
 *       {
 *         "id": 6,
 *         "name": "Greenlots",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Greenlots_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "greenlots",
 *         "version": 0
 *       },
 *       {
 *         "id": 4,
 *         "name": "EVgo",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_NRG_eVgo_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "evgo",
 *         "version": 0
 *       },
 *       {
 *         "id": 3,
 *         "name": "SemaConnect / SemaCharge",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_SemaConnect_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "semaconnect",
 *         "version": 0
 *       },
 *       {
 *         "id": 9,
 *         "name": "Tesla",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_GE+WattStation_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "ge_wattstation",
 *         "version": 0
 *       },
 *       {
 *         "id": 14,
 *         "name": "Volta",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Volta_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "volta",
 *         "version": 0
 *       },
 *       {
 *         "id": 2,
 *         "name": "Blink",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Blink_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "blink",
 *         "version": 0
 *       },
 *       {
 *         "id": 12,
 *         "name": "Tesla",
 *         "photo": "https://s3.amazonaws.com/ucassets/car/network/logo_Tesla_3x.png",
 *         "region": null,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708195,
 *         "updated_at": 1546708195,
 *         "source": "tesla",
 *         "version": 0
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */