import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  title = 'Categorias';

  categories: Category[] = [];

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((data) => (this.categories = data.categories));
  }

  deleteCategory(category: Category) {
    if (confirm('ATENÇÃO: Confirmar exclusão da categoria?')) {
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
