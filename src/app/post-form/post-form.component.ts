import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  thetitle: string = '';
  thethought: string = '';
  theposts: any;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.theposts.push({title:this.thetitle, thoughtc:this.thethought});
  }

  


}
