import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
import {UsersResponse} from '../interfaces/user-response';
import {map} from 'rxjs/operators';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_ENDPOINT = 'https://progmatic.hu/frontend/students';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<UsersResponse>(this.URL_ENDPOINT,
      {withCredentials: true}
    )
      .pipe(map(uResp => uResp.students));
  }

  addUser(user: User): Observable<any> {
    return this.http.post(this.URL_ENDPOINT, {student: user}, {withCredentials: true});
  }

  checkCapital(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.charAt(0)
      && control.value.charAt(0).toUpperCase() === control.value.charAt(0)) {
      return null;
    } else {
      return {capital: true};
    }
  }
}
