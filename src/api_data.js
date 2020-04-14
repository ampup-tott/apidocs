define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "root endpoint",
    "version": "0.3.1",
    "name": "root",
    "group": "Root",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Root endpoint</p>",
    "examples": [
      {
        "title": "Curl example",
        "content": "curl --request POST \\\n  --url http://localhost:6969",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p><code>OK</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UP_STAGE",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "PAGINATION_LIMIT",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "S3_BUCKET",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UPLOAD_MAX_FILESIZE",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "QUEUE_LIMIT",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "{\n  \"status\": \"OK\",\n  \"version\": \"1.0.0\",\n  \"UP_STAGE\": \"development\",\n  \"PAGINATION_LIMIT\": \"20\",\n  \"S3_BUCKET\": \"ampup-dev\",\n  \"UPLOAD_MAX_FILESIZE\": \"2M\",\n  \"QUEUE_LIMIT\": \"300\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lambda/status.js",
    "groupTitle": "Root",
    "sampleRequest": [
      {
        "url": "/"
      }
    ]
  }
] });
