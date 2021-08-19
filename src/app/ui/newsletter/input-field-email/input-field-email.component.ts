import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field-email',
  templateUrl: './input-field-email.component.html',
  styleUrls: ['./input-field-email.component.scss']
})
export class InputFieldEmailComponent implements OnInit {

  placeholder : string = 'Email address'

  constructor() { }

  ngOnInit(): void {
  }

}
