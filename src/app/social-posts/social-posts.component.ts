import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  myposts: Post[] = [
    {
      title: 'November Already?',
      thought: 'How is it possible that the holidays are right around the corner?'
    },
    {
      title: 'Why do I live in Michigan',
      thought: 'I complain about Michigan weather every year, yet I still live here...why??'

    },
    {
      title: 'Coding is fun',
      thought: 'Coding is challenging but fun. Excited to learn new things!'
    }
  ]

  thetitle: string = '';
  thethought: string = '';
  theposts: any;

 
  constructor() { }

  ngOnInit(): void {
  }

  deletePost(post: Post){
    alert(`Post: {post.title} has been deleted.`);
  }

  add() {
    this.theposts.push({title:this.thetitle, thought:this.thethought});
  }

}
