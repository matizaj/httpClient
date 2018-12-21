import { Component } from '@angular/core';
import { HttpService } from './_services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient';
  myPost: any;
constructor(private httpService: HttpService) { }
  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      this.myPost = posts;
      console.log(posts);
    }, error => {
      console.log('Get Posts failed');
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(data => {
      console.log(data);
    });
  }

  getPostByUser() {
this.httpService.getPost(1).subscribe(data => {
  console.log(data);
});
  }

  addPost() {

  }

  updatePost() {

  }

  deletePost() {

  }

  changePost() {

  }
}



