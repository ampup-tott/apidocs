/**
 * @api {GET} /connectors Get Connectors
 * @apiVersion 0.3.1
 * @apiName Get Connectors
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Connectors
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/connectors \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 8,
 *         "name": "Tesla Supercharger",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-Supercharger-v1.png",
 *         "level": 3,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Tesla Supercharger",
 *         "power": 50,
 *         "version": 0
 *       },
 *       {
 *         "id": 3,
 *         "name": "J1772",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-J1772-v1.png",
 *         "level": 2,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Port J1772",
 *         "power": 6.6,
 *         "version": 0
 *       },
 *       {
 *         "id": 5,
 *         "name": "CHAdeMO",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-CHAdeMO-v1.png",
 *         "level": 3,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "CHAdeMO",
 *         "power": 50,
 *         "version": 0
 *       },
 *       {
 *         "id": 6,
 *         "name": "SEA Combo CCS",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-SAE-Combo-CCS-v1.png",
 *         "level": 3,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "SEA Combo CCS",
 *         "power": 50,
 *         "version": 0
 *       },
 *       {
 *         "id": 4,
 *         "name": "Nema 1450",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-1450-v1.png",
 *         "level": 2,
 *         "notes": "(RV plug)",
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Nema 1450",
 *         "power": 6.6,
 *         "version": 0
 *       },
 *       {
 *         "id": 2,
 *         "name": "Nema 520",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-520-v1.png",
 *         "level": 1,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Nema 520",
 *         "power": 3.3,
 *         "version": 0
 *       },
 *       {
 *         "id": 1,
 *         "name": "Nema 515",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Nema-515-v1.png",
 *         "level": 1,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Nema 515",
 *         "power": 3.3,
 *         "version": 0
 *       },
 *       {
 *         "id": 7,
 *         "name": "Tesla HPWC",
 *         "photo": "https://s3.amazonaws.com/ampup-dev/car/outlet/Plug-Type-Tesla-HPWC-v1.png",
 *         "level": 2,
 *         "notes": null,
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194,
 *         "type": "Tesla HPWC",
 *         "power": 6.6,
 *         "version": 0
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */