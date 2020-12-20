import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

  EmployeeList: any[];
  modalTitle: string;
  modalOpen: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmployeeList();
  }

  refreshEmployeeList(){
    this.service.getEmployeeList().subscribe( data => {
      this.EmployeeList = data;
    });
  }

  closeModal(){
    this.modalOpen = false;
    this.refreshEmployeeList();
  }

  addEmployee(){
    this.emp = {
      employeeId:0,
      employeeName:"",
      department:"",
      startDate:"",
      phooFileName:""
    };
    this.modalTitle = "Add new employee";
    this.modalOpen = true;
  }

  editEmployee(item){
    console.log('edit employee: ' + item);
    this.emp = item;
    this.modalTitle = "Edit employee";
    this.modalOpen = true;
  }

  deleteEmployee(item){
    if(confirm("Are you sure to delete this employee ?")){
      this.service.deleteEmployee(item.employeeId).subscribe(data => {
        this.refreshEmployeeList();
      });
    }
  }
}
