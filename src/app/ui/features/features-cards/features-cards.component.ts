import { Component, OnInit } from '@angular/core';
import {FeatureCard} from "./feature-card/feature-card.component";

@Component({
  selector: 'app-features-cards',
  templateUrl: './features-cards.component.html',
  styleUrls: ['./features-cards.component.scss']
})
export class FeaturesCardsComponent implements OnInit {

  featuresCards:string ="features-cards"
  wrapper : string = this.featuresCards+'__wrapper'
  line :string = this.featuresCards+'__line'

  cards : FeatureCard[] = [
    {mode: "overview", header: "Overview", content: 'Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.'},
    {mode: "files", header: "Files", content: 'No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.'},
    {mode: "chats", header: "Meeting chats", content: 'Vim ne tacimates neglegentur. Erat diceret omittam at est.'},
    {mode: "events", header: "Save events", content: 'Nisl idque mel ea, nominati voluptatum.'}
  ]
  last : string = this.cards[this.cards.length-1].mode

  constructor() { }

  ngOnInit(): void {
  }

}
