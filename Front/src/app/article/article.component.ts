import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ArticlesService,

} from '../../core';
import { copyStyles } from '@angular/animations/browser/src/util';


@Component({
  selector: 'app-article',
  templateUrl:'./article.component.html'
})
export class ArticleComponent {
  public message = `Admin Panel`;
  title:any= '';
  result:any ={}


  public title1: string;
  public content: string;
  public urlToImage: string;
  public description: string;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService,
  ){

    this.route.queryParams.subscribe(params => {
      this.title1 = params["title"];
      this.content = params["content"];
      this.description = params["description"];
      this.urlToImage = params["urlToImage"];

  });

  }

  ngOnInit(){
    this.route.params.subscribe(params => {
       this.title = params.title;
    });

 } 


}


