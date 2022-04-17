import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  username!: string;
  repoName!: string;
  

  private _Url='https://api.github.com/users';

  constructor(private http: HttpClient) { 
    // console.log('service is now ready');
    {this.username='linetlucy-genchabe';}

  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username );
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos');
  }

  

  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
    }))
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }
}


// ngOnInit() {
//   // GET request with response type <any>
//   this.http.get<any>('https://api.github.com/users').subscribe((data) => {
//     this.username = data.total;
//     console.log(this.username);
//   });
// }
