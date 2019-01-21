import {Injectable} from '@angular/core';
import {Http} from '@angular/HTTP';
import 'rxjs/Rx';

@Injectable()
export class RedditService{
  http:any;
  baseUrl: String;

  constructor(http: HttpClientModule){
      this.http = http;
      this.baseUrl = 'https://www.reddit.com/r';
  }

  getPosts(category, limit){
      return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json());
  };
}
