import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  constructor() { }
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
    }
  }

  closeModal(){
    this.modalOpen = false;
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){

  }
  
  FilterDepartment(){

  }
}
