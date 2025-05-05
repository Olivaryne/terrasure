const AWS = require('aws-sdk');
const rekognition = new AWS.Rekognition();

exports.compareImages = async (sourceImg, targetImg, bucket) => {
  const params = {
    SourceImage: { S3Object: { Bucket: bucket, Name: sourceImg }},
    TargetImage: { S3Object: { Bucket: bucket, Name: targetImg }},
    SimilarityThreshold: 85
  };
  return rekognition.compareFaces(params).promise();
};
