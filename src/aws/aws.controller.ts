import { 
  Controller,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { AwsService } from './aws.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('aws')
export class AwsController {
  constructor(
    private awsService: AwsService
  ) {}

  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.awsService.uploadFile(file);
  }
}
