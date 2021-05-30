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
    this.categoryService.getAll().subscribe((data) => {
      console.log(data);
      this.categories = data.categories;
    });
  }
}
