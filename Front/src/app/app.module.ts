
import { NgModule,Pipe, PipeTransform} from '@angular/core';
import {RouterModule} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ArticleComponent} from './article/article.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { CoreModule } from '../core/core.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    CoreModule,   
    HomeModule, 
    HttpClientModule,
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'admin', component: AdminComponent, pathMatch: 'full'},
      { path: 'article/:title', component: ArticleComponent, pathMatch: 'full'},
     
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
