import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = formBuilder.group({
      Name: formBuilder.control('', [
        Validators.required,
        Validators.maxLength(128),
      ]),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.categoryForm.dirty && this.categoryForm.valid) {
      const category = this.categoryForm.value;
      this.categoryService.create(category).subscribe((data) => {
        if (data.created) this.router.navigate(['/categories']);
      });
    }
  }

  get Name() {
    return this.categoryForm.get('Name');
  }
}
