import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList
  listData:MatTableDataSource<any>

  
  displayedColumns :string[]=['ID','Name','Department','Position','Salary','Conduct','Quality','Teamwork','Skill' ,'actions']
  

  constructor(private service: EmployeeService) { }

  @ViewChild(MatSort, {static: false}) sort:MatSort
  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getEmployees().subscribe(
      (jsonResponse) => {
        this.employeeList = jsonResponse
        console.log(this.employeeList);
        this.listData=new MatTableDataSource(this.employeeList)
        this.listData.sort=this.sort
        this.listData.paginator = this.paginator;

      }
    )

  }

  onSearchClear(){
    this.searchKey=""
    this.applyFilter()
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
