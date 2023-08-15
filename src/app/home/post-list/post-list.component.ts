import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  post: string; 
  href: string; 
  image: string;
  constructor(private route: ActivatedRoute) { 
    this.post=""
    this.href=""
    this.image=""
  } 
  ngOnInit(): void {
      let articleName = this.route.snapshot.paramMap.get('article'); 
      this.href = window.location.href; 
      this.post = './assets/posts/' + articleName + '.md';
      this.image = "./assets/images/"+ articleName+ "/coverPg.png";
  }
}
