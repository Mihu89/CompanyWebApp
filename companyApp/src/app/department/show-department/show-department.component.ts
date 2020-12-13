import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor(private service: SharedService) { }
departmentList: any=[];
modalTitle: string;
departmentIdFilter: string='';
departmentNameFilter: string='';
allDepartmentsWithoutFilter = [];
department: any;
modalOpen: boolean = false;
  ngOnInit(): void {
  }

  addDepartment(){
    this.department ={
      departmentId:0,
      departmentName: ''
    };
    this.modalTitle="Add Department";
    this.modalOpen = true;
  }

  editDepartment(item){
    this.department = item;
    this.modalTitle = "Edit Department";
    this.modalOpen = true;
  }

  deleteDepartment(item){
    if(confirm("Are you sure to delete this department ?")){
      // delete department
      this.service.deleteDepartment(item.DepartmentId).subscribe(
        data => {
          console.log(data.toString());
          this.refreshDepartmentList();
        }
      );
    }
  }

  closeModal(){
    this.modalOpen = false;
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){
    this.service.getDepartmentList().subscribe( data => {
      this.departmentList = data;
      this.allDepartmentsWithoutFilter = data;
    })
  }

  FilterDepartment(){

  }
}
