import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isAuthenticated = true;

  constructor(private _http:HttpClient) { }

 
  public RegisterUserfromRemote(user:UserModel):Observable<number>{
    return this._http.post<number>("http://localhost:8099/user/register",user)
  }

  public getUsers(): Observable<any[]> {
    return this._http.get<any[]>("http://localhost:8099/user/all");
  }

  private baseUrl='http://localhost:8099';

  public getUser(id:number): Observable<UserModel> {
    const url = `${this.baseUrl}/user/${id}`;
    return this._http.get<UserModel>(url);
  }

  logout(): Observable<any> {
    // Perform any cleanup or additional logic here if needed
    this.isAuthenticated = false;
    return of(null);
  }

  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
