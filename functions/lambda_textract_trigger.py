# AWS Lambda Function for Document Verification (Textract)

import boto3
import json

def lambda_handler(event, context):
    textract = boto3.client('textract')
    
    bucket = event.get('bucket')
    file_name = event.get('fileName')

    if not bucket or not file_name:
        return {
            'statusCode': 400,
            'body': json.dumps('Missing bucket or fileName')
        }

    try:
        response = textract.analyze_document(
            Document={
                'S3Object': {
                    'Bucket': bucket,
                    'Name': file_name
                }
            },
            FeatureTypes=['FORMS']
        )
        return {
            'statusCode': 200,
            'body': json.dumps(response['Blocks'], default=str)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps(str(e))
        }
