import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    UpdateRestaurantComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationPageComponent,
    FeedbackComponent,
    ProfileCardComponent,
    AboutUsComponent,
    ForgotpasswordComponent,
    ContactUsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
