import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Post} from '../_model/post';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const options = new HttpParams().set('userId', userId.toString());
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts/', {params: options});
  }

  addPost(post: Post) {

  }
  updatePost(post: Post) {

  }

  /** Usuwamy post */
  deletePost(id: number) {

  }

  /** Aktualizujemy pola w post */
  changePost(post: Post) {

  }
}
