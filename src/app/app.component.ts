import { Component } from '@angular/core';
import { GithubService } from './github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  score: number;

  constructor(private _githubService: GithubService){
    
  }

  getInfo(){
    this._githubService.getInfo(this.username, (info) =>{
      this.score = info.public_repos + info.followers;
    });
  }
}
