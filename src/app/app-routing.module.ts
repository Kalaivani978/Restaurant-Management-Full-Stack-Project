import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGaurdService } from './auth-gaurd.service';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'restaurant', component: RestaurantListComponent,canActivate:[AuthGaurdService]},
  {path: 'create-restaurant', component: CreateRestaurantComponent,canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'update-restaurant/:id', component: UpdateRestaurantComponent,canActivate:[AuthGaurdService]},
  {path: 'restaurant-details/:id', component: RestaurantDetailsComponent,canActivate:[AuthGaurdService]},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'profile-card', component: ProfileCardComponent,canActivate:[AuthGaurdService]},
  {path: 'register-page', component: RegistrationPageComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'About-Us', component: AboutUsComponent},
  {path: 'forgot', component: ForgotpasswordComponent},
  {path: 'contactUs', component: ContactUsComponent,canActivate:[AuthGaurdService]},
  {path: 'home',component: HomepageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
