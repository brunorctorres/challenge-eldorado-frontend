import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  title = 'Categories';

  categories: Category[] = [];
  message: string = 'Loading categories...';

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data.categories;
      if (!this.categories.length) this.message = 'No categories yet...';
    });
  }

  deleteCategory(category: Category) {
    if (confirm('ATTENTION: Confirm category exclusion?')) {
      this.categoryService.delete(category).subscribe(
        (data) => {
          if (data.removed) window.location.reload();
        },
        (err) => {
          alert('Falha na tentativa de exclusão.');
        }
      );
    }
  }
}
