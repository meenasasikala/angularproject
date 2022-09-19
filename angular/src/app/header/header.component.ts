import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  twoway:any;
  
  isdisabled:boolean=true;
  isActive:boolean=true;
  // inactive:boolean=true;
  languages=[{languageid:1,languagename:'c'},{languageid:2,languagename:'c++'},{languageid:3,languagename:'java'},{languageid:4,languagename:'react'}]
  constructor() { }


  ngOnInit(): void {
  }
  
  onbtn(){
    this.isdisabled=true;
    this.twoway='';
  }
  oninput(event:any){
    this.isdisabled=false;
    console.log(event)
  }
  toggle(){
    this.isdisabled = !this.isdisabled
  }
  
}
