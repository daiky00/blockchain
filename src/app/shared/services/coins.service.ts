import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CoinsService {
  
  coins = `${environment.API}/front`

  constructor(private http: Http) { }

  private extractData(response: Response) {
    return response.json();
  }

  private handleError(error: any) {
    const ERRORMESSAGE = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : "Service Error";
    return Observable.throw(ERRORMESSAGE)
  }

  getAllCoins() {
   
    return this.http.get(this.coins)
                    .map(this.extractData)
                    .catch(this.handleError)
  }

}
