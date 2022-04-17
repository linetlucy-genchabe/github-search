import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // providers:[ProfileService]
})
export class ProfileComponent implements OnInit {

  user: any;
  userRepos:any;
  username: string = 'linetlucy-genchabe'
  imageWidth: number = 220;
  imageHeight: number = 250;
  repoName:string='Quotes-app';
  

  constructor(private profileService: ProfileService, private http:HttpClient) { 
    this.user=profileService.getUser()
    
  }

  findUser () {
    this.profileService.UpdateUser(this.username);

    this.profileService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.profileService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.userRepos = repos;
    })
  }

  

  ngOnInit() {
    this.findUser()
  }

}
