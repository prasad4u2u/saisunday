import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MemberSearchComponent } from './member-search/member-search.component';

const routes =[{
        path:'',
        component:MaincontentComponent
},{
        path:'memberSearch',
        component:MemberSearchComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class AppModule { }
