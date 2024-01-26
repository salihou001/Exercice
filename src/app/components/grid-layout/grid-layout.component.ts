import { Component } from '@angular/core';
import { itemsList } from 'src/app/models/itemList.model';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent {
  listPlant: itemsList[] = [
    { id: 0, name: 'La plante araignée', timing: '2X/day', evolution: '50'},
    { id: 1, name: 'Le romarin', timing: '4X/day', evolution: '100'},
    { id: 2, name: 'La menthe', timing: '3X/day', evolution: '60'},
    { id: 4, name: 'La lavande', timing: '2X/day', evolution: '10'},
    { id: 5, name: 'Le cactus', timing: '1X/day', evolution: '30'},
    { id: 5, name: 'Le megone', timing: '5/day', evolution: '90'},
  ]
}
