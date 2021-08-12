import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageClickerService {

  constructor() { }

  private imageNumber = new Subject<number>();
  public imageNumber$ = this.imageNumber.asObservable();

  imagePositionIs(position: number) {
    this.imageNumber.next(position)
  }
}
