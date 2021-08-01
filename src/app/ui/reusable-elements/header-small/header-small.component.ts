import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss']
})
export class HeaderSmallComponent implements OnInit {

  headerSmall :string = 'header-small'

  @Input() headerText : string = 'no text here (use headerText)'

  constructor() { }

  ngOnInit(): void {
  }

}
