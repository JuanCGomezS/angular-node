import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  active: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  activeMenu(value: boolean){
    if(value === true){
      this.active = false;
    } else {
      this.active = true;
    }

    this.newItemEvent.emit(value);
  }
}
