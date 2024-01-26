import { Component, Input } from '@angular/core';
import { itemsList } from 'src/app/models/itemList.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input()
  listPlant!:itemsList[];
}
