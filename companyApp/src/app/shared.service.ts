import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIurl = 'http://localhost:50001/api/';

  constructor(private http: HttpClient) {}

  getDepartmentList(): Observable<any[]> {
    return this.http.get<any>(this.APIurl + 'department');
  }

  addDepartment(item: any){
    return this.http.post(this.APIurl + 'department', item);
  }

  updateDepartment(item: any){
    return this.http.put(this.APIurl + 'department', item);
  }

  deleteDepartment(item: any){
    return this.http.delete(this.APIurl + 'department', item);
  }
}
