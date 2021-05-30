import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryForm = formBuilder.group({
      Name: formBuilder.control('', Validators.required),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.categoryForm.dirty && this.categoryForm.valid) {
      console.log(this.categoryForm.value);
      const category = this.categoryForm.value;
      this.categoryService.create(category).subscribe((data) => {
        if (data.created) this.router.navigate(['/categories']);
      });
    }
  }
}
