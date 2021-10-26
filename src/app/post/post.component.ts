import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';
import { Post } from '../post';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() thepost: Post ={
    title: 'new',
    thought: 'testing thought'
  };



  @Output() deleted: EventEmitter<Post> = new EventEmitter<Post>();


  constructor() { }

  ngOnInit(): void {
  }

deletePost(){
  this.deleted.emit(this.thepost);
}





}
