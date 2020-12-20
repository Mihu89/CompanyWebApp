import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp : any;
  employeeId:string;
  employeeName: string;
  department: string;
  startDate: string;
  photoFileName: string;
  photoFilePath: string;

  departmentList: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data: any) =>{
      this.departmentList = data;

      this.employeeId = this.emp.employeeId;
      this.employeeName = this.emp.employeeName;
      this.department = this.emp.department;
      this.startDate = this.emp.startDate;
      this.photoFileName = this.emp.photoFileName;
      this.photoFilePath = this.service.photoUrl + this.photoFileName;
    });
  }

  addEmployee(){
    let val = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      department: this.department,
      startDate: this.startDate,
      photoFileName: this.photoFileName
    };

    this.service.addEmployee(val).subscribe(res =>{
      console.log('add-employee ' + res.toString());
    });
  }

  updateEmployee(){
    let val = {
      employeeId: this.employeeId,
      employeeName: this.employeeName,
      department: this.department,
      startDate: this.startDate,
      photoFileName: this.photoFileName
    };

    this.service.updateEmployee(val).subscribe(res =>{
      console.log('update-employee ' + res.toString());
    });
  }

  uploadPhoto(event){
    let employeePhoto = event.target.iles[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', employeePhoto, employeePhoto.name);

    this.service.uploadPhoto(formData).subscribe((data: any) =>{
      this.photoFileName = data.toString();
      this.photoFilePath = this.service.photoUrl + this.photoFileName;
    })
  }
}
