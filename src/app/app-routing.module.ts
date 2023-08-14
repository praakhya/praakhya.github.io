import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './home/posts/posts.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // ...
  { path: 'posts/post/:article', component: PostsComponent },
  { path: '', component: HomeComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
