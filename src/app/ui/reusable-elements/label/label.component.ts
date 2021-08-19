import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() labelText: string = "no words (use 'content')"
  @Input() whiteMode: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
