import { Injectable } from '@angular/core';
import {ExpansionPanel} from "./expansion-panel/expansion-panel.component";

@Injectable({
  providedIn: 'root'
})
export class ExpansionPanelService {

  questions : ExpansionPanel[] =[
    {
      questionHeader: 'Reque insolens in vel?',
      answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      gotoUrl: 'https://yandex.ru'
    },
    {
      questionHeader: 'Vis rebum error graecis ea, id sit postea accusamus?',
      answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      gotoUrl: 'https://yandex.ru'
    },
    {
      questionHeader: 'Ad dicit numquam vel. Et eos iudico feugait percipitur?',
      answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      gotoUrl: 'https://yandex.ru'
    },
    {
      questionHeader: 'Sea no dico percipitur. Fierent constituam definitiones id eum?',
      answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      gotoUrl: 'https://yandex.ru'
    },
    {
      questionHeader: 'Reque insolens in vel?',
      answerText: 'Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.',
      gotoUrl: 'https://yandex.ru'
    },

    ]
  constructor() { }
}
