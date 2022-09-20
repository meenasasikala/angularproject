import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() users:any;
 @Input() userindex:any;
 @Output() removeUserEvent = new EventEmitter();
  

  ngOnInit() {
  }
  removeUser(){
    console.log(this.userindex)
    this.removeUserEvent.emit(this.userindex)
  }
  constructor() { }

  
 
  

}
