// src/app/app.component.ts
import { Component } from '@angular/core';
import { DynamicContentComponent } from './dynamic-content/dynamic-content.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from "./sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicContentComponent, CommonModule, FormsModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
