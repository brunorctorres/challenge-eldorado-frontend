import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { DeviceService } from '../device.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.scss'],
})
export class DeviceCreateComponent implements OnInit {
  deviceForm: FormGroup;
  categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private deviceService: DeviceService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.deviceForm = formBuilder.group({
      Color: formBuilder.control('', Validators.required),
      Category: formBuilder.control('', Validators.required),
      partNumber: formBuilder.control('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((data) => (this.categories = data.categories));
  }

  submit() {
    console.log(this.deviceForm.value);
    if (this.deviceForm.dirty && this.deviceForm.valid) {
      const device = this.deviceForm.value;
      this.deviceService.create(device).subscribe((data) => {
        if (data.created) this.router.navigate(['/devices']);
      });
    }
  }
}
