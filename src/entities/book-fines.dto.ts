import { ApiProperty } from '@nestjs/swagger';
import { BookFines } from '../interfaces/book-fines.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowerDto } from './borrower.dto';
import { BookDto } from './book.dto';
import { IssuedBookDto } from './issued-book.dto';

@Entity('bookfines')
export class BookFinesDto implements BookFines {
  @PrimaryGeneratedColumn()
  BookFines_ID?: number;

  @ApiProperty({ example: '09-23-22' })
  @Column({ length: 100 })
  Fine_Date: string;

  @ApiProperty({ example: 'P5.00' })
  @Column({ length: 100 })
  Payment_Amount: string;

  @ApiProperty({ example: 'Pay' })
  @Column({ length: 100 })
  Payment_Status: string;
  borrowers: any;

  @ManyToOne(() => BorrowerDto, (borrower) => borrower.fine)
  @JoinColumn({ name: 'Borrower_ID' })
  borrower: BorrowerDto[];

  @ManyToOne(() => BookDto, (book) => book.fine)
  @JoinColumn({ name: 'Book_ID' })
  book: BookDto[];

  
  @OneToMany(() => IssuedBookDto, (issued) => issued.fines)
  issued: IssuedBookDto;
  
}
