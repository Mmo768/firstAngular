import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {HeaderComponent} from './header/header.component'
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",redirectTo:"Header" , pathMatch:"full"},
  {path:"Header",component:HeaderComponent},
  {path:"PORTFOLIO",component:PortfolioComponent},
  {path:"ABOUT",component:AboutComponent},
  {path:"CONTACT",component:ContactComponent},
  {path:"**",redirectTo:"Header"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
