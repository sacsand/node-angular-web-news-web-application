import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { ApiService } from './api.service';
import { Article} from '../models';
import { map } from 'rxjs/operators';
import { copyStyles } from '@angular/animations/browser/src/util';

@Injectable()
export class ArticlesService {
  constructor (
    private apiService: ApiService
  ) {}


 // get articles from database
  getAll(query): Observable<any> {
    const params = { query: JSON.stringify({ ...query }) };
    return this.apiService.get( `${environment.api_url}/article`,params)
    
  }

  // fetch data from news api
  fetch(query): Observable<any> {
    return this.apiService.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${environment.news_api_key}`,{})
    
  }

  // save articles to database
  save(article): Observable<any> {
      
      return this.apiService.post('/article/', {article:article})
       
  }

 



}
