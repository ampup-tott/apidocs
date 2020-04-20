/**
 * @api {GET} /notifications/user Get User's Notification
 * @apiVersion 0.3.1
 * @apiName Get User's Notification
 * @apiGroup NOTIFICATION
 * @apiPermission none
 * @apiDescription Get User's Notification
 * @apiParam {number} user_id The id of user
 * @apiParam {number} page 
 * @apiParam {number} limit 
 * @apiParamExample {json} Params Example
 *   {
 *     "user_id": 3996,
 *     "page": 1,
 *     "limit": 5
 *   }
 * @apiExample {curl} Curl example
 *  curl --request GET \
 *     --url http://localhost:6969/notifications/user?user_id=3996&page=1&limit=5 \
 *     --header 'content-type: application/json' \
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {json} data The data returned.
 * @apiSuccessExample {json} Success Example
 *   {
 *     "status": "OK",
 *     "data": {
 *       "total": "38",
 *       "items": [
 *         {
 *           "id": 2332,
 *           "notification_id": 2332,
 *           "notification_title": "Your reservation has been CANCELLED",
 *           "notification_content": "Reservation hold expired (15 minutes). Your reservation has been Cancelled",
 *           "notification.data": "{\"type\":\"reservation-driver\",\"id\":\"1090\",\"status\":\"1\",\"a_title\":\"Your reservation has been CANCELLED\",\"a_body\":\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\"}",
 *           "sent_at": 1587361500,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 2329,
 *           "notification_id": 2329,
 *           "notification_title": "Your reservation is on hold for 15 minutes",
 *           "notification_content": "Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes",
 *           "notification.data": "{\"type\":\"reservation-driver\",\"id\":\"1090\",\"status\":\"1\",\"a_title\":\"Your reservation is on hold for 15 minutes\",\"a_body\":\"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\"}",
 *           "sent_at": 1587360602,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 2328,
 *           "notification_id": 2328,
 *           "notification_title": "Your reservation has been CANCELLED",
 *           "notification_content": "Reservation hold expired (15 minutes). Your reservation has been Cancelled",
 *           "notification.data": "{\"type\":\"reservation-driver\",\"id\":\"1089\",\"status\":\"1\",\"a_title\":\"Your reservation has been CANCELLED\",\"a_body\":\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\"}",
 *           "sent_at": 1587359708,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 2324,
 *           "notification_id": 2324,
 *           "notification_title": "Your reservation is on hold for 15 minutes",
 *           "notification_content": "Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes",
 *           "notification.data": "{\"type\":\"reservation-driver\",\"id\":\"1089\",\"status\":\"1\",\"a_title\":\"Your reservation is on hold for 15 minutes\",\"a_body\":\"Please make your way to Chim cút’s soon. Reservation will be cancelled after 15 minutes\"}",
 *           "sent_at": 1587358804,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         },
 *         {
 *           "id": 2306,
 *           "notification_id": 2306,
 *           "notification_title": "Your reservation has been CANCELLED",
 *           "notification_content": "Reservation hold expired (15 minutes). Your reservation has been Cancelled",
 *           "notification.data": "{\"type\":\"reservation-driver\",\"id\":\"1085\",\"status\":\"1\",\"a_title\":\"Your reservation has been CANCELLED\",\"a_body\":\"Reservation hold expired (15 minutes). Your reservation has been Cancelled\"}",
 *           "sent_at": 1587120307,
 *           "hash": "",
 *           "system": "ampUp",
 *           "status": 1
 *         }
 *       ],
 *       "next_page": 2
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