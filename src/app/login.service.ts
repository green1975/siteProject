import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  private loginUrl = 'api/login';

  constructor(private http: HttpClient) { }

  getLogin(): Observable<Login[]> {
    return this.http.get<Login[]>(this.loginUrl)
    .pipe(
      catchError(this.handleError('getLogin', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead


    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
