/**
 * @api {POST} /payment/check-info Check Info
 * @apiVersion 0.3.1
 * @apiName Check Info
 * @apiGroup PAYMENT
 * @apiPermission user
 * @apiDescription Check Info
 * @apiHeader {String} Authorization The token can be generated from your user profile.
 * @apiHeaderExample {String} Header Example
 *   'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U'
 * @apiExample {curl} Curl example
 *  curl --request POST \
 *     --url http://localhost:6969/payment/check-info \
 *     --header 'content-type: application/json' \
 *     --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU3MCwidXNlcl9pZCI6NDAwNywiZGV2aWNlX2lkIjoiTTE4MDZFN1RHIiwiZGV2aWNlX25hbWUiOiJSZWRtaSIsImV4cCI6MTY3MzMxMTUwMiwiaWF0IjoxNTg2OTExNTAyfQ.-uyOFkZ4SrGJYRIJ-Eec2ggfgUZJIzNMmb22zVJ-j1U' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": [
 *       {
 *         "id": 147,
 *         "user_id": 4007,
 *         "payment_method_id": 1,
 *         "account_info": {
 *           "id": "cus_GwHsYovPfZgTFN",
 *           "object": "customer",
 *           "account_balance": 0,
 *           "address": null,
 *           "balance": 0,
 *           "created": 1584627870,
 *           "currency": null,
 *           "default_source": "card_1GOPIPAU3TdzxGeyVsHxoKAU",
 *           "delinquent": false,
 *           "description": null,
 *           "discount": null,
 *           "email": "ampup.tott@gmail.com",
 *           "invoice_prefix": "391BED18",
 *           "invoice_settings": {
 *             "custom_fields": null,
 *             "default_payment_method": null,
 *             "footer": null
 *           },
 *           "livemode": false,
 *           "metadata": {},
 *           "name": null,
 *           "next_invoice_sequence": 1,
 *           "phone": null,
 *           "preferred_locales": [],
 *           "shipping": null,
 *           "sources": {
 *             "object": "list",
 *             "data": [
 *               {
 *                 "id": "card_1GOPIPAU3TdzxGeyVsHxoKAU",
 *                 "object": "card",
 *                 "address_city": null,
 *                 "address_country": null,
 *                 "address_line1": null,
 *                 "address_line1_check": null,
 *                 "address_line2": null,
 *                 "address_state": null,
 *                 "address_zip": null,
 *                 "address_zip_check": null,
 *                 "brand": "Visa",
 *                 "country": "US",
 *                 "customer": "cus_GwHsYovPfZgTFN",
 *                 "cvc_check": "pass",
 *                 "dynamic_last4": null,
 *                 "exp_month": 10,
 *                 "exp_year": 2022,
 *                 "fingerprint": "J6j2L9g8P5Wc3aTr",
 *                 "funding": "credit",
 *                 "last4": "4242",
 *                 "metadata": {},
 *                 "name": "TO TRAN",
 *                 "tokenization_method": null
 *               }
 *             ],
 *             "has_more": false,
 *             "total_count": 1,
 *             "url": "/v1/customers/cus_GwHsYovPfZgTFN/sources"
 *           },
 *           "subscriptions": {
 *             "object": "list",
 *             "data": [],
 *             "has_more": false,
 *             "total_count": 0,
 *             "url": "/v1/customers/cus_GwHsYovPfZgTFN/subscriptions"
 *           },
 *           "tax_exempt": "none",
 *           "tax_ids": {
 *             "object": "list",
 *             "data": [],
 *             "has_more": false,
 *             "total_count": 0,
 *             "url": "/v1/customers/cus_GwHsYovPfZgTFN/tax_ids"
 *           },
 *           "tax_info": null,
 *           "tax_info_verification": null
 *         },
 *         "status": 1,
 *         "created_at": 1584627870,
 *         "updated_at": null,
 *         "is_default": true
 *       }
 *     ]
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 */