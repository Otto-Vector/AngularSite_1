import {Component, Input, OnInit} from '@angular/core';

export interface FeatureCard {
  mode : 'overview' | 'chats' | 'files' | 'events'
  header : string
  content : string
}

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  featureCard : string = 'feature-card'
  icon : string = this.featureCard + '__icon'
  header : string = this.featureCard + '__header'
  content : string = this.featureCard + '__content'

  @Input() card : FeatureCard = { mode: 'files', header: 'no text here', content: 'some text'}

  constructor() { }

  ngOnInit(): void {
  }

}
