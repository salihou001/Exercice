import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { ItemListComponent } from './components/dashboard/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { PlantComponent } from './components/dashboard/plant/plant.component';
import { HistoryComponent } from './components/dashboard/history/history.component';
import { ListHistoryComponent } from './components/list-history/list-history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SignInComponent,
    SignOutComponent,
    ItemListComponent,
    MenuComponent,
    GridLayoutComponent,
    PlantComponent,
    HistoryComponent,
    ListHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
