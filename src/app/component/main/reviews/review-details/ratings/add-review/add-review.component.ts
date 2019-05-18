import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
  providers: [DatePipe]
})
export class AddReviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddReviewComponent>, private datePipe: DatePipe) {
  }

  newReviewForm = new FormGroup({
    author: new FormControl('', Validators.required),
    text: new FormControl(''),
    rating: new FormControl('3', Validators.required),
  });

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  generateResult() {
    const date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');

    return {...this.newReviewForm.getRawValue(), date};
  }
}
