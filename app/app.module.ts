import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { DrugSearchComponent } from './drug-search/drug-search.component';

const routes =[{
        path:'',
        component:MaincontentComponent
},{
        path:'memberSearch',
        component:MemberSearchComponent
},{
        path:'drugSearch',
        component:DrugSearchComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    MemberSearchComponent,
    DrugSearchComponent
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
