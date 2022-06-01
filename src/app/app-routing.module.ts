import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegiterComponent} from "./regiter/regiter.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WildCardComponent} from "./wild-card/wild-card.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegiterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
