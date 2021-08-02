import {Component, Input, OnInit} from '@angular/core';

export interface StatsCard {
  left : boolean
  image : string
  statistics : string
  description : string
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats : string = 'stats'
  statsItem :string = this.stats + '__item'
  left : string = this.statsItem + '_left'
  right : string = this.statsItem + '_right'
  image : string = this.stats + '__image'
  statistics : string = this.stats + '__statistics'
  description : string = this.stats + '__description'

  @Input() cards : StatsCard[] = [{
    left : true,
    image : '../../../assets/images/stats/time.png',
    statistics : '89%',
    description : 'Customers who have increased their productivity'
  }, {
    left : false,
    image : '../../../assets/images/stats/people.png',
    statistics : '3123',
    description : 'Users who have used our application'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
