import { Component, OnInit } from '@angular/core';
import {ScrollSpyService} from "@uniprank/ngx-scrollspy";

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor(private _scrollSpyService: ScrollSpyService) {}
  // настройка для scrollSpy (пусть будет пока здесь
    ngOnInit() {
        this._scrollSpyService.setOffset('window', 100);
    }


}
