import { PeopleModel } from 'src/app/models/personas';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
})
export class PersonasComponent implements OnInit {
  peopleForm: FormGroup;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.peopleForm = new FormGroup({
      ident: new FormControl(null, [
        Validators.required,
        Validators.maxLength(155),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(155),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(155),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      /* dateBird: new FormControl({ value: '' }, [
        Validators.required,
        Validators.minLength(155),
      ]), */
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(200),
      ]),
    });
  }

  onPeople(form: NgForm) {
    const personas: PeopleModel = {
      per_id: null,
      per_ident: form['ident'],
      per_first_name: form['firstName'],
      per_last_name: form['lastName'],
      per_email: form['email'],
      per_birth_date: null,
      per_address: form['address'],
      updatedAt: null,
      createdAt: null,
    };

    this.api.onSavePeople(personas).subscribe((data) => {
      console.log(data);
    });
  }
}
