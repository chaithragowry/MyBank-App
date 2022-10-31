import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { // 3rd execution
  //properties and methods

  //data binding-share data inside the component

                                      //one way binding(one direction data flow)
                                    //1.1component to view ts-html
aim="your perfect banking partner" //string  interpolation -{{expression}}
account="Enter your account here" //property binding-[attribute_name]="property"
acno="";
pswd="";

userDetails:any={ //objects of objects
    1000:{acno:1000,username:'chaithra',password:1000,balance:10000},
    1001:{acno:1001,username:'malu',password:1001,balance:20000},
    1002:{acno:1002,username:'laji',password:1003,balance:10100},
  }

  constructor() { } //1st execution

  ngOnInit(): void { // 2nd execution -life cycle hooks of angular
    //initial process of component
  }
//userdefined functions  //4th execution


acnoChange(event:any){
  this.acno=(event.target.value);
  console.log(event.target.value);
}

pswdChange(event:any){
  this.pswd=event.target.value;
  console.log(event.target.value);
}


  

login(){  //1.2 view to component (html-ts)
  //alert('login clicked'); //a)event binding-(event_name) = "function_name()"
                          //eg: (click)=login()
                        //b)event binding-$event-(event_name) = "function_name($event)"
    var acno=this.acno;
    var pswd=this.pswd;
    var userDetails=this.userDetails;

    if(acno in userDetails){
      if(pswd==userDetails[acno]['password']){
        alert("login successful")
      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert('user not found')
    }
 }                        

}

