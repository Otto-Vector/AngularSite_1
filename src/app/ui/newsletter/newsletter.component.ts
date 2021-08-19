import { Component, OnInit } from '@angular/core';
import {ButtonSaveMe} from "./button-save-me/button-save-me.component";

interface Classes {
  main: string
  leftPanel: string
  header: string
  text: string
  rightPanel: string
  inputEmail: string
  buttonSave: string
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  private mainClass = 'news-letter'
  newsLetter : Classes = {
    main: this.mainClass,
    leftPanel: this.mainClass + '__left-panel',
    header: this.mainClass + '__header',
    text: this.mainClass + '__text',
    rightPanel: this.mainClass + '__right-panel',
    inputEmail: this.mainClass + '__input-email',
    buttonSave: this.mainClass + '__button-save',
  }

  forButton : ButtonSaveMe = {
    content: "Save me",
    action: () => {
      window.open('https://mail.yandex.ru')
    }
  }

  forHeader: string = 'Sign up for newsletter'
  forText: string = 'Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.'

  constructor() { }

  ngOnInit(): void {
  }

}
