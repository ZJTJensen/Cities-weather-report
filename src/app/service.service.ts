import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {
  data: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {     }
    updateData(newData: any): void {
      const tempData= this.data.getValue();
      tempData.push(newData);
      this.data.next(newData);
    }
    weather(location){
      return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a0ab82d8ef9376c513ef1aa53e5afe80`);
      }

  
}
