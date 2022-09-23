import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private root:Router,private active:ActivatedRoute) { }

  ngOnInit(): void {
  //  setTimeout(() => 
    
  //  {
  //   this.root.navigate(['parent'],{relativeTo:this.active})
  //  }, 2000);

   
  }
   navigateToParent(){
    console.log("stalin")
   this.root.navigate(['parent'],{relativeTo:this.active})
   }
}
