import { Component } from '@angular/core';
import { Article } from '../../models/author';
import { Category } from '../../models/category';
import { photographyData } from '../posts.data';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink , FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  items: Article[] = photographyData.posts;

  categories: Category[] = [
    { id: 1, name: 'إضاءة', count: 3, iconClass: 'fa-solid fa-gear' },
    { id: 2, name: 'بورتريه', count: 3, iconClass: 'fa-solid fa-user' },
    { id: 3, name: 'مناظر طبيعية', count: 2, iconClass: 'fa-solid fa-mountain' },
    { id: 4, name: 'تقنيات', count: 5, iconClass: 'fa-solid fa-sliders' },
    { id: 5, name: 'معدات', count: 3, iconClass: 'fa-solid fa-gear' }
  ];

  searchTerm: string = '';
  selectedCategory: string = 'الكل';

  currentPage: number = 1;
  pageSize: number = 6; 


  get filteredArticles(): Article[] {
    return this.items.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'الكل' || article.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  
  get paginatedItems(): Article[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredArticles.slice(startIndex, startIndex + this.pageSize);
  }

 
  get totalPages(): number {
    return Math.ceil(this.filteredArticles.length / this.pageSize) || 1;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 350, behavior: 'smooth' }); 
    }
  }

  selectCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    this.currentPage = 1; 
  }

  onSearchChange() {
    this.currentPage = 1;
  }
}