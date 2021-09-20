import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
@Input() active : boolean;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.active);
  }

}
