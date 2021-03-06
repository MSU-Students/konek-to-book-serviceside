import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MediaDto } from '../entities/media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(MediaDto) private mediaRepository: Repository<MediaDto>,
  ) {}

  async uploadFile(file: Express.Multer.File) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.mediaRepository.save(createFile);
  }

  async update(Media_id: number, file: Express.Multer.File) {
    const createFile = this.mediaRepository.create({
      data: file.buffer,
      filename: file.filename || file.originalname,
      mimeType: file.mimetype,
    });
    return await this.mediaRepository.update(Media_id, createFile);
  }
  async findOne(Media_id: number): Promise<MediaDto> {
    return await this.mediaRepository.findOne(Media_id);
  }

  async deleteOne(Media_id: number) {
    return this.mediaRepository.delete(Media_id);
  }
}
export default MediaService;