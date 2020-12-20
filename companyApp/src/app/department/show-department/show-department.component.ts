import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { MockSharedService } from '../../mock-shared.service';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  // constructor(private service: SharedService) { }
  constructor(private service: MockSharedService){}

departmentList: any=[];
modalTitle: string;
departmentIdFilter: string='';
departmentNameFilter: string='';
allDepartmentsWithoutFilter = [];
department: any;
modalOpen: boolean = false;

  ngOnInit(): void {
    console.log('onInit');
    this.refreshDepartmentList();
  }


  addDepartment(){

    this.department ={
      departmentId:0,
      departmentName: ''
    };
    this.modalTitle="Add Department";
    this.modalOpen = true;
    
    console.log('show ' + this.department.departmentId);
  }

  editDepartment(item){
    this.department = item;
    this.modalTitle = "Edit Department";
    this.modalOpen = true;
  }

  deleteDepartment(item){
    if(confirm("Are you sure to delete this department ?")){
      // delete department
      // this.service.deleteDepartment(item.DepartmentId).subscribe(
      //   data => {
      //     console.log(data.toString());
      //     this.refreshDepartmentList();
      //   });
    }
  }

  closeModal(){
    this.modalOpen = false;
    this.refreshDepartmentList();
  }

  refreshDepartmentList(){
    console.log("test");
    this.service.getDepartmentList().subscribe( data => {
      this.departmentList = data;
      console.log('dl ' + this.departmentList.lenght);
      this.allDepartmentsWithoutFilter = data;
    });
  }

  filterDepartment(){

    let departIdFilter = this.departmentIdFilter;
    let departNameFilter = this.departmentNameFilter;
    this.departmentList = this.allDepartmentsWithoutFilter.filter(function(el){
      return el.departmentId.toString().toLowerCase().includes(
        departIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          departNameFilter.toString().trim().toLowerCase()
        );
    })
  }

  sortDepartment(prop, asc){
    this.departmentList = this.allDepartmentsWithoutFilter.sort(function(x,y){
      if(asc){
        return (x[prop] > y[prop]) ? 1 : ((x[prop] < y[prop]) ? -1 : 0);
      }else{
        return (y[prop] > x[prop]) ? 1 : ((y[prop]> x[prop]) ? -1 : 0);
      }
    });
  }


}
