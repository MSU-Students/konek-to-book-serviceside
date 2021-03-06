import { ApiProperty } from '@nestjs/swagger';
import { Borrower } from '../interfaces/borrower.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IssuedBookDto } from './issued-book.dto';
import { BookFinesDto } from './book-fines.dto';

@Entity('borrower')
export class BorrowerDto implements Borrower {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Borrower_ID?: number;

  @ApiProperty({ example: '201812567' })
  @Column({ length: 100 })
  Student_ID: string;

  @ApiProperty({ example: 'Annehayrah' })
  @Column({ length: 100 })
  B_First_Name: string;

  @ApiProperty({ example: 'P' })
  @Column({ length: 100 })
  B_Middle_Name: string;

  @ApiProperty({ example: 'Racman' })
  @Column({ length: 100 })
  B_Last_Name: string;

  @ApiProperty({ example: '4th Year' })
  @Column({ length: 100 })
  YearLevel: string;

  @ApiProperty({ example: '0984' })
  @Column({ length: 100 })
  B_Contact_Number: string;

  /* @OneToMany(() => IssuedBookDto, (issued) => issued.borrowerss)
  issued: IssuedBookDto;

   @OneToMany(() => BookFinesDto, (fine) => fine.borrower)
  fine: BookFinesDto;

    @OneToOne(() => IssuedBookDto)
  @JoinColumn({ name: 'IssuedBook_ID' })
  issuedbook: IssuedBookDto;

  ------- issued book_ID (FK)
  @ApiProperty({ required: false, type: () => IssuedBookDto })
  @ManyToOne(() => IssuedBookDto, (issuedbk) => issuedbk.borrowers)
  issuedbk: IssuedBookDto;
*/

  @OneToMany(() => IssuedBookDto, (issued) => issued.borrowerss)
  issued: IssuedBookDto[];

  @OneToMany(() => BookFinesDto, (fine) => fine.borrower, {
    nullable: true,
  })
  fine: BookFinesDto[];
}
