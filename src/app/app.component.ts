import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user: any;
  repos: any[] = [];
  loading: any;
  flag1: any = 0;
  flag2: any = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }

  searchUser(username: string) {
    this.flag1=0
    this.flag2=0
    this.loading = 1;
    this.apiService.getUser(username).subscribe((user: any) => {
      this.user = user;
      this.flag1=1;
      if(this.user.length === 0)
        {
          this.loading = 3;
          this.flag1=0;
        }
    } ,
    (error: any) => {
      console.error('Error fetching user:', error);
      this.user=[];
      console.log("user in error",this.user);
      this.loading=3;
    });

    this.apiService.getUserRepos(username).subscribe((repos: any) => {
      this.repos = repos;
      this.flag2=1;
      if(this.repos.length ===0)
      {
        this.loading=2
        this.flag2=0;
      }
    },
    (error: any) => {
      console.error('Error fetching repositories:', error);
      this.repos = [];
      console.log("user repos in error",this.repos);
      if(this.loading===3){
        this.loading=3;
      }else{
      this.loading=2;
      }
    });

    this.loading=0;
  }
}