import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-form-datepicker-type',
  template: `
    <input matInput
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [matDatepicker]="picker"
      [matDatepickerFilter]="to.datepickerOptions.filter"
      [formlyAttributes]="field">
    <ng-template #matSuffix>
      <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    </ng-template>
    <mat-datepicker #picker></mat-datepicker>
  `,
})
export class DatepickerTypeComponent extends FieldType {
  @ViewChild(MatInput, {static: false}) formFieldControl: MatInput;
}
