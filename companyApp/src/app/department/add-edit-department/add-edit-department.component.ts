import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {
@Input() department: any;
  constructor() { }

  ngOnInit(): void {
  }

}
