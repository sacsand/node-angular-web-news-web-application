import {Component} from '@angular/core';
import { ActivatedRoute, Router,NavigationExtras } from '@angular/router';
import {
  Article,
  ArticlesService,

} from '../../core';
import { copyStyles } from '@angular/animations/browser/src/util';


@Component({
  selector: 'app-home',
  templateUrl: `home.component.html`
})

export class HomeComponent {
  public message = `Home`;

   query : any;
   results = [];
   keyword : String = "Bitcoin";
   errors: Object = {};
  
   constructor(
     private route: ActivatedRoute,
     private articlesService: ArticlesService,
     private router: Router
   ) {
     
   }
 
   ngOnInit(){
       this.getArticles();
   }
 
   // get articles from database
   getArticles(){
     this.query = {};
     this.articlesService.getAll(this.query).subscribe(data => {

      data.articles.forEach(element => {

        if(element.title){
           this.results.push(element)
        }
        
       });
       
     });
   }

  // single article view
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
