import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-dialog',
  standalone: true,
  imports: [CommonModule,MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './form-dialog.component.html',
  styleUrl: './form-dialog.component.css'
})
export class FormDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref: MatDialogRef<FormDialogComponent>){

  }
  inputData: any;
  ngOnInit(): void {
    this.inputData = this.data
  }
  closePopup() {
    this.ref.close('Closed using function');
  }

}
