import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {
  Image,
  ModalGalleryService,
  ModalGalleryRef,
  ModalGalleryConfig,
  LibConfig, ButtonsStrategy
} from '@ks89/angular-modal-gallery';

@Injectable({
  providedIn: 'root'
})
export class ModalGalleryLocalService {

  private imageNumber = new Subject<number>();
  public imageNumber$ = this.imageNumber.asObservable();

  imagePositionIs(position: number) {
    this.imageNumber.next(position)
  }

  constructor(
    private modalGalleryService: ModalGalleryService,
  ) { }

   galleryImages: Image[] = [
    new Image(0, {
      img: '../../../../assets/images/blog/image1.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: '../../../../assets/images/blog/image2.jpg',
      description: 'Description 2'
    }),
    new Image(
      2,
      {
        img: '../../../../assets/images/blog/image3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      }
    ),
    new Image(3, {
      img: '../../../../assets/images/plan-and-manage/image2.png',
      description: 'Description 4',
      extUrl: 'http://www.google.com'
    }),
    new Image(4, {
      img: '../../../../assets/images/plan-and-manage/image3.png' })
  ];

   openModal(id: number, imageIndex: number): void {
      const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
        id: id,
        images: this.galleryImages,
        currentImage: this.galleryImages[imageIndex],
          libConfig: {
            previewConfig: {
              visible: false
            },
            slideConfig: {
              infinite: true,
              sidePreviews: {
                show: false
              }
            },
          currentImageConfig: {
            downloadable: true
          },
          buttonsConfig: {
            visible: true,
            strategy: ButtonsStrategy.SIMPLE
          }
        } as LibConfig
      } as ModalGalleryConfig) as ModalGalleryRef;
   }

   get galleryImagesIds() : number[] {
     let nId: number[] = []
     for (let {id} of this.galleryImages)
       nId.push(id)
     return nId
   }
   get galleryImagesPaths() : string[] {
     let imagePath: string[] = []
     for (let {modal} of this.galleryImages)
       imagePath.push(modal.img.toString())
     return imagePath
   }
}
