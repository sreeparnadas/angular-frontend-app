import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentDetailsService } from '../services/student-details.service';
import { IStudent } from '../models/interface/IStudent';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatBadgeModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent  implements AfterViewInit{
  studentList: IStudent[] = [];
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IStudent>(this.studentList);
  studentService = inject(StudentDetailsService);
  columnHeaders: string[] = ['Id', 'First Name', 'Last Name', 'Email', 'Action'];

  totalStudents = new Promise((resolve, rejection) => {
    setTimeout(() => {
      resolve(this.studentList.length)
    },2000)
  })

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort !: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private dialog: MatDialog){
    //using callback function
    // this.studentService.get().subscribe((data:any) => {
    //   this.studentList = data;
    // })

    //passing object which have 2 properties next and error
    this.studentService.get().subscribe({
      next: (response) => {
        this.studentList = response.data;
        this.displayedColumns = Object.keys(this.studentList[0]).filter(key=>key!== 'password');
        this.displayedColumns.push('actions');
        this.dataSource.data = this.studentList;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openPopup(){
    var windowPopup = this.dialog.open(FormDialogComponent, {
      width: '60%',
      data: {
        title: 'Add Student'
      }
    })
    windowPopup.afterClosed().subscribe(item=>{
      console.log(item);
    })
  }
}