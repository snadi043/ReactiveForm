import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  invalidName =  'Test';
  invalidMessage = 'Enter a valid projectName'

  ngOnInit(){
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.testValidator.bind(this)]),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    })
  }

  onSubmit(){
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }

  testValidator(control: FormControl): {[s: string]: boolean} {
    if(this.invalidName === 'Test'){
      return {'testValidator': true};
    }
    return null as any;
    }
  
}

