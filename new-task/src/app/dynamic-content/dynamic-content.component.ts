// src/app/dynamic-content/dynamic-content.component.ts
import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent {
  title: string='';
  content: string='';
  cardColor: string = '#0d447a';

  constructor(private contentService: ContentService) {

    this.updateContent()
  }

  updateContent() {
    this.title = this.contentService.getTitle();
    this.content = this.contentService.getContent();
  }

  onColorChange(newColor: string) {
    this.cardColor = newColor;
  }
}
