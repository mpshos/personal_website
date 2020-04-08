import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mike Shostrand';
  selectedPath = 'about';

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    console.log(this.route.snapshot.url);
    console.log(this.route)
    if (this.route.snapshot.url.length > 0){
      console.log(this.route.snapshot.url[0].path)
      this.selectedPath = this.route.snapshot.url[0].path;
    }
    else{
      this.selectedPath = 'none';
    }
  }
}
