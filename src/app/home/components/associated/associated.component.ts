import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITransaction } from '../../models/transaction.model';

@Component({
  selector: 'app-associated',
  templateUrl: './associated.component.html',
  styleUrls: ['./associated.component.css']
})
export class AssociatedComponent implements OnInit {

  associatedForm!: FormGroup;
  transfer!:ITransaction;

  constructor(
    public dialogRef: MatDialogRef<AssociatedComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private fb: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.associatedForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      documentType: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      accountNumber: new FormControl('', [Validators.required])
    })
  }


  transferMoney(){
    this.transfer = this.associatedForm.value;
    console.log(this.associatedForm.value);
  }

}
