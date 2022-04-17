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

  clientId: string = "c789323b20a2d31dc9fa";
  clientSecret: string = "83e428e5ed1c99fded8ab02686753f74656f9f6b";
  

  private _Url='https://api.github.com/users';

  constructor(private http: HttpClient) { 
    // console.log('service is now ready');
    {this.username='linetlucy-genchabe';}

  }
  getUser() {
    return this.http.get("https://api.github.com/users/" + this.username );
  }

  getUserRepos() {
    return this.http.get('https://api.github.com/users/' + this.username + '/repos'+ "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }

  

   searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName+'/repos?acess_token='+environment.apikey);
      // headers: new HttpHeaders({Authorization: `token ${environment.apikey}`})
     }
   


  getProfiles() {
    return this.http.get<any[]>(this._Url);  }

  getProfileInfo(){  
    return this.http.get('https://api.github.com/users/'+this.username+'?acess_token='+environment.apikey);    }   
  
   
  getRepos(){
    let userrepo =  this.http.get('https://api.github.com/users/'+this.username+'/repos?acess_token='+environment.apikey); 
    console.log(userrepo)
    return userrepo    
  }

  UpdateUser(username:string) {
    this.username = username;
  }

  UpdateRepo(repo:string) {
    this.repoName = repo;
  }
}


//  ngOnInit() {
//       // GET request with response type <any>
//   this.http.get<any>('https://api.github.com/users').subscribe((data) => {
//     this.username = data.total;
//     console.log(this.username);
//   });
//   }
