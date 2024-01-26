import { Component } from '@angular/core';
import { History } from 'src/app/models/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  listHistory: History[] = [
    { id : 0, img: '', name: 'Colorful Heaven', description : '', time: '30s'},
    { id : 0, img: '', name: '', description : '', time: '1H30s'},
    { id : 0, img: '', name: '', description : '', time: '2H'},
    { id : 0, img: '', name: '', description : '', time: '2H45s'},
    { id : 0, img: '', name: '', description : '', time: '6H'},
    { id : 0, img: '', name: '', description : '', time: '1day'},
  ]
}
