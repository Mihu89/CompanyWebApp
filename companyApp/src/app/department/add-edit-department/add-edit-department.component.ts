import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {
@Input() department: any;

departmentId: string;
departmentName: string;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    console.log('add ');
    console.log(this.department.departmentId);
    this.departmentId = this.department.departmentId;
    this.departmentName = this.department.departmentName;
  }

  addDepartment(){
    let item = {
      departmentId: this.departmentId,
      departmentName: this.departmentName
    };
    this.service.addDepartment(item).subscribe(res =>{
      console.log("insert: " + res.toString());
    })
  }

  updateDepartment(){
    let item = {
      departmentId: this.departmentId,
      departmentName: this.departmentName
    };
    this.service.updateDepartment(item).subscribe(res =>{
      console.log('update: ' + res.toString());
    });
  }

}
