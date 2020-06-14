import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  appraisalForm: FormGroup;
  employee:Employee
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.appraisalForm = this.formBuilder.group({
      employee_id: [0, Validators.required],
      name: ['', Validators.required],
      position:['',Validators.required],
      department:['',Validators.required],
      salary: [0, Validators.required],
      conduct: [0, Validators.required],
      teamwork: [0, Validators.required],
      quality: [0, Validators.required],
      skill: [0, Validators.required],
    });
  }

  validateData() {
    var unfilledFieldExists=false;
    if (this.appraisalForm.value.name === undefined || this.appraisalForm.value.name === '') {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.position === undefined || this.appraisalForm.value.position === '') {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.department === undefined || this.appraisalForm.value.department === '') {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.employee_id === undefined || this.appraisalForm.value.employee_id === 0) {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.salary === undefined || this.appraisalForm.value.salary === 0) {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.conduct === undefined || this.appraisalForm.value.conduct === 0) {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.teamwork === undefined || this.appraisalForm.value.teamwork === 0) {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.quality === undefined || this.appraisalForm.value.quality === 0) {
      unfilledFieldExists=true;
    }
    if (this.appraisalForm.value.skill === undefined || this.appraisalForm.value.skill === 0) {
      unfilledFieldExists=true;
    }
    return !unfilledFieldExists
  }
  onSubmit() {
    if(!this.validateData()){
      return;
    }

  }

}
