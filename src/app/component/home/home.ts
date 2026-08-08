import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/author';
import { Category } from '../../models/category';
import { photographyData } from '../posts.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink , ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  allPosts: Article[] = photographyData.posts;

  
  featuredPosts = this.allPosts.filter(post => post.featured);


  latestArticles: Article[] = this.allPosts.filter(post => !post.featured);

  
  categories: Category[] = [
    { id: 1, name: 'إضاءة', count: 3, iconClass: 'fa-solid fa-gear' },
    { id: 2, name: 'بورتريه', count: 3, iconClass: 'fa-solid fa-user' },
    { id: 3, name: 'مناظر طبيعية', count: 2, iconClass: 'fa-solid fa-mountain' },
    { id: 4, name: 'تقنيات', count: 5, iconClass: 'fa-solid fa-sliders' },
    { id: 5, name: 'معدات', count: 3, iconClass: 'fa-solid fa-gear' }
  ];
}