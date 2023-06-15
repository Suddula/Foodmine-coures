import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/models/User';
import { IUserLogin } from '../shared/Interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject =new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient) {
    this.userObservable =this.userSubject.asObservable();
   }
login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      // tap({
      //   next: (user) =>{
      //     //this.setUserToLocalStorage(user);
      //     this.userSubject.next(user);
      //     this.toastrService.success(
      //       `Welcome to Foodmine ${user.name}!`,
      //       'Login Successful'
      //     )
      //   },
      //   error: (errorResponse) => {
      //     this.toastrService.error(errorResponse.error, 'Login Failed');
      //   }
      // })
    );
  }
}


