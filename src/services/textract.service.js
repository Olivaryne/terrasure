const AWS = require('aws-sdk');
const textract = new AWS.Textract({ region: 'us-east-1' });

exports.analyzeDocument = async (bucket, fileName) => {
  const params = {
    Document: {
      S3Object: { Bucket: bucket, Name: fileName }
    },
    FeatureTypes: ['FORMS']
  };
  return textract.analyzeDocument(params).promise();
};
