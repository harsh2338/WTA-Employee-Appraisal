// import { Component, OnInit } from '@angular/core';
// import {FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'
// import {Employee} from '../../models/employee.model'
// import { EmployeeService } from 'src/app/services/employee.service';
// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {

//   appraisalForm: FormGroup;
//   employee:Employee

//   autoTicks = false;
//   disabled = false;
//   invert = false;
//   max = 5;
//   min = 0;
//   showTicks = false;
//   step = 1;
//   thumbLabel = true;
//   value = 0;
//   vertical = false;
//   tickInterval = 1;

//   constructor(
//     private formBuilder: FormBuilder,
//     private service:EmployeeService
//   ) { }

//   ngOnInit() {
//     this.appraisalForm = this.formBuilder.group({
//       employee_id: [0, Validators.required],
//       name: ['', Validators.required],
//       position:['',Validators.required],
//       department:['',Validators.required],
//       salary: [0, Validators.required],
//       conduct: [0, Validators.required],
//       teamwork: [0, Validators.required],
//       quality: [0, Validators.required],
//       skill: [0, Validators.required],
//     });
//   }
//   onSubmit(){
//     if(this.appraisalForm.valid){
//       this.service.addData(this.appraisalForm.value).subscribe((res)=>{
        
//         console.log(res)
//       })
//     }
//     // console.log(this.appraisalForm.value)
//   }

// }
