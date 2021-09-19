exports.handler = function (event, context) {
    //console.log(JSON.stringify(event, null, 2));
    const AWS = require('aws-sdk');
    const dynamodb = new AWS.DynamoDB();
    const sns = new AWS.SNS();


    module.exports.handler = async (event) => {
        const records = Array.of('');
        records = event.Records;
        let cleanRecords = records.forEach(event => {
            cleanUp(event)
        });
        records.forEach(event => {
            savetoPersistance(event);
        });




    };
    function cleanUp(event) {
        //Logic to Massage the Event per Business Logic need.
        //Only Insert/Upsert Data which need to be persisted per user_claim_Key. this help for dtaa consistency.

    }
    function async savetoPersistance(record) {
        try {
            const payload = Buffer.from(record.kinesis.data, 'base64').toString();
            const { date } = JSON.parse(payload);
            // save records to the dynamodb
            await dynamodb.putItem({
                TableName: 'indications-table',
                Item: {
                    recordId: { S: record.eventID },
                    date: { S: date }
                }
            }).promise();

        } catch (err) {
            console.log(err);
        }

    }
};