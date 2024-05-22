import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup,
  FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-react2',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './react2.component.html',
  styleUrl: './react2.component.css'
})
export class React2Component {

  myForm : FormGroup;
  constructor(private formBuilder: FormBuilder){

      this.myForm = formBuilder.group({

          "userName": ["Tom", [Validators.required]],
          "userEmail": ["", [ Validators.required, Validators.email]],
          "phones": formBuilder.array([
              ["+7", Validators.required]
          ])
      });
  }
  getFormsControls() : FormArray{
      return this.myForm.controls["phones"] as FormArray;
  }
  addPhone(){
      (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+8", Validators.required));
  }
  submit(){
      console.log(this.myForm);
  }

}
