# API Endpoint: Check Quota

## Supported Provider
- XL Axiata
- AXIS
- ~~Indosat~~ (stay tuned!)
- ~~Telkomsel~~ (stay tuned!)

## Request

### POST https://api.arfoux.me/api/v1/cekkuota

### Headers

| Parameter      | Type   | Description                                       |
|----------------|--------|---------------------------------------------------|
| Content-Type   | String | The format of the data being sent (must be `application/json`). |
| X-API-Key      | String | API key for authentication and authorization access. |

### Body Parameters

| Parameter | Type   | Description                                       |
|-----------|--------|---------------------------------------------------|
| msisdn    | String | The mobile phone number to check the quota (must start with '08'). |

### Example Request

```bash
curl -X POST https://api.arfoux.me/api/v1/cekkuota \
-H "Content-Type: application/json" \
-H "X-API-Key: 213b" \
-d '{"msisdn": "08888888888"}'
```

### Response

The response will be in JSON format and may include the following fields:

| Field            | Type    | Description                                      |
|------------------|---------|--------------------------------------------------|
| status           | Boolean | Indicates whether the request was successful.    |
| message          | String  | A message providing additional information.      |
| data             | Object  | Contains detailed information about the user's quota. |
| data.msisdn     | String  | The mobile phone number queried.                 |
| data.type       | String  | The type of account (e.g., "Prabayar").         |
| data.dukcapil_status | String | Status of Dukcapil registration.               |
| data.active_until| String  | The date until the account is active.           |
| data.items      | Array   | A list of quota items available to the user.    |

#### Example Response

```json
{
    "status": true,
    "message": "sukses",
    "data": {
        "msisdn": "088888888888",
        "type": "Prabayar",
        "dukcapil_status": "Sudah",
        "active_until": "14 October 2024",
        "items": [
            {
                "name": "Bonus Kuota Harian",
                "expired_date": "2025-01-16 23:59:59",
                "benefits": [
                    {
                        "type": "Apps",
                        "quota": "100 MB",
                        "remaining_quota": "100 MB"
                    }
                ]
            },
            {
                "name": "XTRA ON 1GB, 13rb",
                "expired_date": "2025-07-22 23:59:59",
                "benefits": [
                    {
                        "type": "24jam di Semua Jaringan",
                        "quota": "2 GB",
                        "remaining_quota": "0"
                    }
                ]
            }
        ]
    }
}
