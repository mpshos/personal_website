import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

import { Interest } from '../interest';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interests: Interest[];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(private interestsService: InterestsService) { }

  ngOnInit() {
    this.interests = this.interestsService.getInterests();

    // this.carousel.pause();
  }

}
