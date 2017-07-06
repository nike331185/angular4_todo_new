import { SubModule } from './sub/sub.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { UsersComponent } from './users.component';
// import { TitleComponent } from './title/title.component';
// import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './filter.pipe';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    // TitleComponent,
    // FooterComponent,
    FilterPipe,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SubModule
  ],
  exports: [
    UsersComponent,

  ],
  providers: [],
})
export class UsersModule { }
