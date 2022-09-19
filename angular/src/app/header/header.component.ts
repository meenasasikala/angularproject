import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  twoway:any;
  
  isdisabled:boolean=true;

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
  
}
