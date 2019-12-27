import {Component} from '@angular/core';
import { ActivatedRoute, Router ,NavigationExtras} from '@angular/router';
import {
  ArticlesService,

} from '../../core';
import { copyStyles } from '@angular/animations/browser/src/util';


@Component({
  selector: 'app-admin',
  templateUrl:'./admin.component.html'
})
export class AdminComponent {
  public message = `Admin Panel`;
  query : String;
  results = [];
  keyword : String = "Bitcoin";
  public errors: String;
 
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) {
    
  }

  ngOnInit(){ 
    this.searchArticle(this.keyword);
  }

  // search and get articles from news api
  searchArticle(keyword){
    this.query = `${keyword}&sortBy=publishedAt&pageSize=15&page=1`;
    this.articlesService.fetch(this.query).subscribe(data => {
     
      this.results = data.articles;    
    });
  }

 
   // save article
  saveArtilcle(article) {
     
    this.articlesService.save({article}).subscribe(
      article =>{if(article.error){
        this.errors = article.error;
      }else{
        this.errors = "article imported sucessfully";
      }},
      error => {
        this.errors = error.error       

      }
    );    
  }

  public view(item) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "title": item.title,
            "content": item.content,
            "description" : item.description,
            "urlToImage" : item.urlToImage
        }
    };
    this.router.navigate([`article/${item.title}`], navigationExtras);
  }


}


