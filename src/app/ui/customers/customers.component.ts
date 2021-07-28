import { Component, OnInit } from '@angular/core';

interface Customers {
  title: string
  url: string
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers : string = 'customers'
  customers_item : string = this.customers+'__item'

  customersArr : Customers[] = [{
    title : 'Bitbucket',
    url: '#bitbucket'
  },{
    title: 'AppleWatch',
    url: '#applewatch'
  },{
    title: 'Facebook',
    url: '#facebook'
  },{
    title: 'Atlassian',
    url: '#atlassian'
  },{
    title: 'Audi',
    url: '#audi'
  }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
