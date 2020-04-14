/**
 * @api {get} / root endpoint
 * @apiVersion 0.3.1
 * @apiName root
 * @apiGroup Root
 * @apiPermission none
 * @apiDescription Root endpoint
 * @apiExample {curl} Curl example
 *   curl --request POST \
 *     --url http://localhost:6969
 * @apiSuccess {String} status <code>OK</code>
 * @apiSuccess {String} version
 * @apiSuccess {String} UP_STAGE
 * @apiSuccess {String} PAGINATION_LIMIT
 * @apiSuccess {String} S3_BUCKET
 * @apiSuccess {String} UPLOAD_MAX_FILESIZE
 * @apiSuccess {String} QUEUE_LIMIT
 * @apiSuccessExample Success Example
 *   {
 *     "status": "OK",
 *     "version": "1.0.0",
 *     "UP_STAGE": "development",
 *     "PAGINATION_LIMIT": "20",
 *     "S3_BUCKET": "ampup-dev",
 *     "UPLOAD_MAX_FILESIZE": "2M",
 *     "QUEUE_LIMIT": "300"
 *   }
 */