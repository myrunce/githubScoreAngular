import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class GithubService {
  githubInfo;

  constructor(private _http: Http) { }

  getInfo(username, callback){
    this._http.get('https://api.github.com/users/' + username).subscribe(
      (response) => {
        this.githubInfo = response.json();
        callback(this.githubInfo);
      },
      (err) => {
        console.log(err)
      }
    );
  }
}
