import { Component } from '@angular/core';
import {Employee, Country, Address} from './Employee';
import {FormGroup, FormControl, NgForm, NgModel,NgModelGroup,FormBuilder} from '@angular/forms';
import { TransferServiceService } from './transfer-service.service';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TransferServiceService]
})
export class AppComponent {

  employee : Employee; 
  reactiveEmployee : Employee;
  selected=[];
  ReactiveForm : FormGroup;

  constructor( private TransferService : TransferServiceService,private fb: FormBuilder ){

  
  }

  Onsubmit(){
debugger;
  this.TransferService.EmployeeData(this.employee);

  }



  ngOnInit(){
    this.employee  = new Employee('1','Mayank','Male',{city:'Lucknow',State:'UP'});
    this.TransferService.s.subscribe( (a : Employee)=> {debugger; 
      this.reactiveEmployee = a;
      this.ReactiveForm = this.fb.group({
        PersonId:[this.reactiveEmployee.PersonId],
        name: [this.reactiveEmployee.name],
        Gender:[this.reactiveEmployee.Gender],
        address: this.fb.group({
          city:[this.reactiveEmployee.address.city],
          State:[this.reactiveEmployee.address.State]
        }),
      


      });

  
    
    })

  }

  
reset(form :NgForm){
  form.resetForm();
}
  
 
}
