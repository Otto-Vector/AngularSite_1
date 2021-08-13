import {Component, Input, OnInit} from '@angular/core';
// import {ImageClickerService} from "../../../engine/image-clicker.service";
import {ModalGalleryLocalService} from "../../../../engine/modal-gallery-local.service";

@Component({
  selector: 'app-view-image-button',
  templateUrl: './view-image-button.component.html',
  styleUrls: ['./view-image-button.component.scss']
})
export class ViewImageButtonComponent implements OnInit {

  @Input() n : number = 0
  action : (arg:number)=> void = (n)=>{console.log(n)}


  constructor( readonly imageIs : ModalGalleryLocalService) { }

  ngOnInit(): void {
  }

}
