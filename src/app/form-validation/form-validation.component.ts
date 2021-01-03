import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface FormValues {
  name: String,
  email: String,
  age: Number
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {

  private formGroup: FormGroup | null = null;
  public formValues: FormValues | null = null;
  public notProvidedMessage: String = 'Data not provided yet.';

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.formGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: [18, [Validators.min(18), Validators.max(120)]]
    });
  }

  public onSubmitForm() {
    if(this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formValues = <FormValues> this.form?.getRawValue();
  }

  get form() {
    return this.formGroup;
  }

  get name() {
    return this.formGroup?.get('name');
  }

  get email() {
    return this.formGroup?.get('email');
  }

  get age() {
    return this.formGroup?.get('age');
  }

}
