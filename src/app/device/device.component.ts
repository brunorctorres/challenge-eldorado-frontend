import { Component, OnInit } from '@angular/core';
import { Device } from '../models/Device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})
export class DeviceComponent implements OnInit {
  title = 'Dispositivos';

  devices: Device[] = [];

  constructor(public deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getAll().subscribe((data) => {
      console.log(data);
      this.devices = data.devices;
    });
  }
}
