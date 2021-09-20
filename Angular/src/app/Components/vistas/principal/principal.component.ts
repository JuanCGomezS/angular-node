import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent implements OnInit {
  active: boolean;

  constructor() {}

  ngOnInit(): void {}

  addItem(value: boolean) {
    this.active = value;
    console.log(value);
  }
}
