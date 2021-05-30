import { Component, OnInit } from '@angular/core';
import { Device } from '../models/Device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  title = 'Devices';

  devices: Device[] = [];
  message: string = 'Loading devices...';

  constructor(public deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getAll().subscribe((data) => {
      this.devices = data.devices;
      if (!this.devices.length) this.message = 'No devices yet...';
    });
  }

  deleteDevice(device: Device) {
    if (confirm('ATTENTION: Confirm device exclusion?')) {
      this.deviceService.delete(device).subscribe((data) => {
        if (data.removed) window.location.reload();
      });
    }
  }
}
