import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuardService } from './services/guard/guard.service';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignOutComponent } from './pages/sign-out/sign-out.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { PlantComponent } from './components/dashboard/plant/plant.component';
import { HistoryComponent } from './components/dashboard/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuardService],
    children:[
      { path: '', component: GridLayoutComponent },
      { path: 'plant', component: PlantComponent },
      { path: 'history', component: HistoryComponent },
    ]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignOutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
