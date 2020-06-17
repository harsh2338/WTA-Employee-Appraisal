import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Employee } from '../../models/employee.model'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  appraisalForm: FormGroup;
  employee: Employee
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 5;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;




  employeeList
  listData: MatTableDataSource<any>
  displayedColumns: string[] = ['ID', 'Name', 'Department', 'Position', 'Salary', 'Conduct', 'Quality', 'Teamwork', 'Skill', 'actions']


  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService) {


  }

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {


    this.appraisalForm = this.formBuilder.group({
      _id: [],
      employee_id: [, Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      salary: [, Validators.required],
      conduct: [0, Validators.required],
      teamwork: [0, Validators.required],
      quality: [0, Validators.required],
      skill: [0, Validators.required],
    });








    this.setEmployeeList()








  }

  setEmployeeList() {
    this.service.getEmployees().subscribe(
      (jsonResponse) => {
        this.employeeList = jsonResponse
        console.log(this.employeeList);
        this.listData = new MatTableDataSource(this.employeeList)
        this.listData.paginator = this.paginator;

      }
    )
  }

  onSubmit() {
    if (this.appraisalForm.valid) {

      if (this.appraisalForm.value._id == null) {
        this.service.addData(this.appraisalForm.value).subscribe((res) => {
          this.setEmployeeList()
          this.appraisalForm.reset()
        })
      }
      else {
        this.service.updateEmployee(this.appraisalForm.value).subscribe((res) => {
          this.setEmployeeList()
          this.appraisalForm.reset()
        })
      }
    }
  }
  onSearchClear() {
    this.searchKey = ""
    this.applyFilter()
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onEdit(emp) {
    console.log(emp)
    this.appraisalForm.reset(emp)
  }
  onDelete(id) {
    // console.log(id);
    this.service.deleteEmployee(id).subscribe((res)=>{
      this.setEmployeeList()
      console.log(res)
    })
  }
}
