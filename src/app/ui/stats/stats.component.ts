import {Component, Input, OnInit} from '@angular/core';

interface Classes {
  main : string
  statsItem : {
    main : string
    left : string
    right : string
  }
  image : string
  statistics : string
  description : string
}

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

  main_class : string = 'stats'
  stats : Classes = {
    main : this.main_class,
    statsItem: {
      main : this.main_class + '__item',
      left: this.main_class + '__item_left',
      right: this.main_class + '__item_right',
    },
    image: this.main_class + '__image',
    statistics: this.main_class + '__statistics',
    description: this.main_class + '__description'
  }

  @Input() cards : StatsCard[] = [{
    left : true,
    image : './assets/images/stats/time.png',
    statistics : '89%',
    description : 'Customers who have increased their productivity'
  }, {
    left : false,
    image : './assets/images/stats/people.png',
    statistics : '3123',
    description : 'Users who have used our application'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
