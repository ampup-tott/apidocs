/**
 * @api {GET} /notifications/host Get Host's Notification
 * @apiVersion 0.3.1
 * @apiName Get Host's Notification
 * @apiGroup NOTIFICATION
 * @apiPermission none
 * @apiDescription Get Host's Notification
 * @apiParam {number} user_id The id of user
 * @apiParam {number} page 
 * @apiParam {number} limit 
 * @apiParamExample {json} Params Example
 *   {
 *     "user_id": 3997,
 *     "page": 1,
 *     "limit": 100
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/notifications/host?user_id=3997&page=1&limit=100 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "total": "10",
 *       "items": [
 *         {
 *           "id": 15,
 *           "notification_id": 15,
 *           "notification_title": "Thank you for hosting a charge",
 *           "notification_content": "Thang Le is amped up. Thang Le and the growing EV community are grateful",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"844\",\"status\":\"1\",\"a_title\":\"Thank you for hosting a charge\",\"a_body\":\"Thang Le is amped up. Thang Le and the growing EV community are grateful\"}",
 *           "sent_at": 1579341215,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 14,
 *           "notification_id": 14,
 *           "notification_title": "Thang Le’s reservation CANCELLED",
 *           "notification_content": "Reservation hold expired. Thang Le is considered a no-show. Reservation has been cancelled.",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"844\",\"status\":\"1\",\"a_title\":\"Thang Le’s reservation CANCELLED\",\"a_body\":\"Reservation hold expired. Thang Le is considered a no-show. Reservation has been cancelled.\"}",
 *           "sent_at": 1579341214,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 17,
 *           "notification_id": 17,
 *           "notification_title": "Reservation held for ampUp guest",
 *           "notification_content": "Thang Le’s reservation will be cancelled automatically after 5 minutes",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"844\",\"status\":\"1\",\"a_title\":\"Reservation held for ampUp guest\",\"a_body\":\"Thang Le’s reservation will be cancelled automatically after 5 minutes\"}",
 *           "sent_at": 1579341214,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 12,
 *           "notification_id": 12,
 *           "notification_title": "Thang Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Thang Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"844\",\"status\":\"1\",\"a_title\":\"Thang Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Thang Le\"}",
 *           "sent_at": 1579329058,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 11,
 *           "notification_id": 11,
 *           "notification_title": "Reservation cancelled by driver",
 *           "notification_content": "Victor Le has cancelled the reservation",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"840\",\"status\":\"1\",\"a_title\":\"Reservation cancelled by driver\",\"a_body\":\"Victor Le has cancelled the reservation\"}",
 *           "sent_at": 1578638614,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 10,
 *           "notification_id": 10,
 *           "notification_title": "Victor Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Victor Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"840\",\"status\":\"1\",\"a_title\":\"Victor Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Victor Le\"}",
 *           "sent_at": 1578638487,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 9,
 *           "notification_id": 9,
 *           "notification_title": "Thang Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Thang Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"839\",\"status\":\"1\",\"a_title\":\"Thang Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Thang Le\"}",
 *           "sent_at": 1578637926,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 8,
 *           "notification_id": 8,
 *           "notification_title": "Thang Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Thang Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"838\",\"status\":\"1\",\"a_title\":\"Thang Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Thang Le\"}",
 *           "sent_at": 1578637482,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 7,
 *           "notification_id": 7,
 *           "notification_title": "Thang Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Thang Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"837\",\"status\":\"1\",\"a_title\":\"Thang Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Thang Le\"}",
 *           "sent_at": 1578637087,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 5,
 *           "notification_id": 5,
 *           "notification_title": "Victor Le reserved your charger",
 *           "notification_content": "New reservation by fellow EV driver Victor Le",
 *           "notification.data": "{\"type\":\"reservation-host\",\"id\":\"836\",\"status\":\"1\",\"a_title\":\"Victor Le reserved your charger\",\"a_body\":\"New reservation by fellow EV driver Victor Le\"}",
 *           "sent_at": 1578625607,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         }
 *       ],
 *       "next_page": null
 *     }
 *   }
 * @apiError {String} status <code>FAIL</code>
 * @apiError {String} reason The cause of Error.
 * @apiErrorExample {json} Error Example 1
 *   {
 *     "status": "FAIL",
 *     "reason": "Missing or invalid parameter: user_id"
 *   }
 */