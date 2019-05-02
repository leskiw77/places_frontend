import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Geo} from '../../../../model/places';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.scss']
})
export class AddPlaceComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddPlaceComponent>) {}

  newPlaceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    category: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
