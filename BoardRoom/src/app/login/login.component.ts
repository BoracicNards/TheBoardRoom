
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      window.alert('Success!')
      this.dialogRef.close();
    }
  }

}
