import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { UsersModule } from './users/users.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: NavBarComponent },
      { path: 'users', component: UsersComponent },

    ]),
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
