import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLogService {

  constructor() { }

  Write(str: string) {
    console.log(str);
  }
}
