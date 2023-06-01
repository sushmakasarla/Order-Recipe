import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@Input() public parent;
@Output() public childdata=new EventEmitter<string>();

  constructor() { 
    this.childdata.emit("hello");
  }

  ngOnInit() {
  }

}
