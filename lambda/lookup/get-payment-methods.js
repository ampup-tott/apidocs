/**
 * @api {GET} /payment-methods Get Payment Methods
 * @apiVersion 0.3.1
 * @apiName Get Payment Methods
 * @apiGroup LOOKUP
 * @apiPermission none
 * @apiDescription Get Payment Methods
 * @apiParamExample {json} Params Example
 *   {}
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/payment-methods \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 1,
 *         "name": "Credit Card",
 *         "photo": "http://lorempixel.com/640/480/business",
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194
 *       },
 *       {
 *         "id": 2,
 *         "name": "Paypal",
 *         "photo": "http://lorempixel.com/640/480/business",
 *         "status": 1,
 *         "created_at": 1546708194,
 *         "updated_at": 1546708194
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */