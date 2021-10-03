import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Employee } from './Employee';

@Injectable()
export class TransferServiceService {

  constructor() { }
  s =new Subject();

  EmployeeData(employee:Employee){
    
      this.s.next(employee);
  }

}
