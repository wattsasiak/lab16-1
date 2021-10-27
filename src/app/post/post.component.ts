import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';
import { EventEmitter } from '@angular/core';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() thepost: Post ={
    title: 'Coding is fun',
    thought: 'Coding is challenging but fun. Excited to learn new things!'
  };



  @Output() deleted: EventEmitter<Post> = new EventEmitter<Post>();


  constructor() { }

  ngOnInit(): void {
  }

deletePost(){
  this.deleted.emit(this.thepost);
}





}
