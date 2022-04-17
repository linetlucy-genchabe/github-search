import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repoitems:any=["items"];
  repoName:string='Quotes-app';
  
  

  constructor(private profileService:ProfileService, private http:HttpClient) {
    

   }

  
   findRepo () {
     this.profileService.UpdateRepo(this.repoName);
     this.profileService.searchrepos().subscribe((repo: { [x: string]: any; })=> {
       console.log(this.repoitems);
       this.repoitems= repo['items']; 
       console.log(this.repoitems);
      // console.log(repo["items"]);
      // this.repoitems= repo["items"]; //this is the new
       // this.item = repo;
       
     })
   }
  ngOnInit(): void {
    this.findRepo
  }

}
