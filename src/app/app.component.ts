import { Component } from '@angular/core';
import { HttpService } from './_services/http.service';
import { Post } from './_model/post';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient';
  myPost: any;
  allPost$: Observable<Array<Post>>;
constructor(private httpService: HttpService) { }
  getPosts() {
    this.allPost$ = this.httpService.getPosts();
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
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'moj post',
      body: 'nowy wpis'
    });

    this.httpService.addPost(p).subscribe(data => {
      this.myPost = data;
      console.log(data);
    });

  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'moj post update put',
      body: 'nowy wpis update put'
    });
    this.httpService.updatePost(p).subscribe(data => {
      console.log(data);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(data => {
      console.log(data);
    });
  }

  changePost() {
    const post: Post =({
      id: 1,
      body: 'body patch'
    });
    this.httpService.changePost(post).subscribe(data => {
      console.log(data);
    })
  }
}



