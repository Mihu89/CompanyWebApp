import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockSharedService {
  // readonly APIurl = 'http://localhost:50001/api/';

  constructor(private http: HttpClient) {}

  mockDepartments = [
    {id: 1,
    name: "Test department"},
    {id: 2,
    name: "Dev department"},
    {id: 3,
    name: "Sale department"},
  ];

  getDepartmentList(): Observable<any[]> {
    //return this.http.get<any>(this.APIurl + 'department');
    return of(this.mockDepartments);
  }

  addDepartment(item: any){
    this.mockDepartments.push(item);
  }

  updateDepartment(item: any){
    //return this.http.put(this.APIurl + 'department', item);
    let elementToUpdate = this.mockDepartments.findIndex(x => x.id == item.id && x.name == item.name);
    this.mockDepartments[elementToUpdate].id = item.id;
    this.mockDepartments[elementToUpdate].name = item.name;
  }

  deleteDepartment(item: any) : Observable<any[]>{
    // return this.http.delete(this.APIurl + 'department', item);
    let elementIndexToDelete = this.mockDepartments.findIndex(x => x.id == item.id && x.name == item.name);
    this.mockDepartments.slice(elementIndexToDelete, 1);

    return of(this.mockDepartments);
  }
}
