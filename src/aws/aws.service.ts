import { Injectable } from '@nestjs/common';

import * as AWS from 'aws-sdk';

@Injectable()
export class AwsService {

  async uploadFile(file: Express.Multer.File) {
    const AWS_S3_BUCKET_NAME = 'BUCKET_NAME';
    const s3 = new AWS.S3({
      accessKeyId: "ACCESSKEYID",
      secretAccessKey: "SECRETACCESSKEY"
    });

    const urlKey = `filepath/${file.filename}`;
    const params = {
      Body: file.buffer,
      Bucket: AWS_S3_BUCKET_NAME,
      Key: urlKey
    };

    const data = await s3
      .putObject(params)
      .promise()
      .then(data => {
        return data
      })
      .catch(err => {
        return err
      })
    
    return data;
  }
}
