const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on port ${port}!`));

app.get('/promotions', function (req, res) {
    res.send({
        "status": "Success",
        "responseMap": [
            {
                "promotion_id": 1,
                "promotion_title": "Free P2P Transfer",
                "photo_path": "https://wave-strapi-staging-s3-bucket.s3.ap-southeast-1.amazonaws.com/preprod_Send_Money_Prod_size_01_69d07761e3.png",
                "promotion_type": "SPECIAL",
                "category_id": 1,
                "category_title": "Send Money",
                "hasDetails": false,
                "action_link_ios": "d2F2ZXBheTovL2hvbWUvdWkvdmlldy9tb25leXRyYW5zZmVyL3NlbmRtb25leS8/Y29udGVudD17bnVsbH0mZGlyZWN0aW9uPTIxMzEzNjI1NzAmbXBfc291cmNlPURlZXBsaW5rJm1wX3BoX25vX3NvdXJjZT1EZWVwbGluaw==",
                "action_link_android": "d2F2ZXBheTovL2hvbWUvdWkvdmlldy9tb25leXRyYW5zZmVyL3NlbmRtb25leS8/Y29udGVudD17bnVsbH0mZGlyZWN0aW9uPTIxMzEzNjI1NzAmbXBfc291cmNlPURlZXBsaW5rJm1wX3BoX25vX3NvdXJjZT1EZWVwbGluaw==",
                "position": 3,
                "promotion_code": "code_2",
                "is_external": false,
                "external_deeplink": null
            },
            {
                "promotion_id": 2,
                "promotion_title": "Let’s top up your mobile phone!",
                "photo_path": "https://wave-strapi-staging-s3-bucket.s3.ap-southeast-1.amazonaws.com/topup_airtime_287c1217af.png",
                "promotion_type": "SPECIAL",
                "category_id": 3,
                "category_title": "Top Up",
                "hasDetails": false,
                "action_link_ios": "d2F2ZXBheTovL2hvbWUvdWkvdmlldy9tb25leXRyYW5zZmVyL3RvcHVwLz9jb250YWN0PXtudWxsfSZkaXJlY3Rpb249MjEzMTI5NjMzMSZtcF9zb3VyY2U9RGVlcGxpbms=",
                "action_link_android": "d2F2ZXBheTovL2hvbWUvdWkvdmlldy9tb25leXRyYW5zZmVyL3RvcHVwLz9jb250YWN0PXtudWxsfSZkaXJlY3Rpb249MjEzMTI5NjMzMSZtcF9zb3VyY2U9RGVlcGxpbms=",
                "position": 1,
                "promotion_code": "code_3",
                "is_external": false,
                "external_deeplink": null
            }
        ]
    })
})
