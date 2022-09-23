import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private root:Router) { }

  ngOnInit(): void {
   setTimeout(() => {
    this.root.navigate(['parent'])
   }, 2000);

   
  }
  //  navigateToParent(){
  //   console.log("stalin")
  //   this.root.navigate(['parent'])
  //  }
}
