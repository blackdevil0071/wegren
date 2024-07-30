import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  newTitle: string = '';
  newContent: string = '';
  selectedColor: string = '#0d447a';

  titleStyles = this.createDefaultStyles();
  descriptionStyles = this.createDefaultStyles();

  @Output() titleChange = new EventEmitter<string>();
  @Output() contentChange = new EventEmitter<string>();
  @Output() colorChange = new EventEmitter<string>();
  @Output() titleStylesChange = new EventEmitter<any>();
  @Output() descriptionStylesChange = new EventEmitter<any>();

  colors: string[] = ['#FD746C','#000000', '#FF6F61', '#FFA500', '#004d00','#92FE9D','#D7A2E2'];
  isDropdownOpen: boolean = false;

  fontStyles: string[] = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
  fontSizes: string[] = ['12px', '16px', '20px', '24px'];

  constructor(private contentService: ContentService) {
    this.newTitle = this.contentService.getTitle();
    this.newContent = this.contentService.getContent();
  }

  createDefaultStyles() {
    return {
      fontSize: '16px',
      fontFamily: 'Arial',
      fontWeight: 'normal',
      fontStyle: 'normal'
    };
  }

  onTitleChange() {
    this.contentService.setTitle(this.newTitle);
    this.titleChange.emit(this.newTitle);
    this.titleStylesChange.emit(this.titleStyles);
  }

  onContentChange() {
    this.contentService.setContent(this.newContent);
    this.contentChange.emit(this.newContent);
    this.descriptionStylesChange.emit(this.descriptionStyles);
  }

  onColorSelect(color: string) {
    this.selectedColor = color;
    this.isDropdownOpen = false;
    this.colorChange.emit(this.selectedColor);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  applyFontStyle(event: Event, target: 'title' | 'description') {
    const value = (event.target as HTMLSelectElement).value;
    const targetStyles = target === 'title' ? this.titleStyles : this.descriptionStyles;
    targetStyles.fontFamily = value;
    (target === 'title' ? this.titleStylesChange : this.descriptionStylesChange).emit(targetStyles);
  }

  applyFontSize(event: Event, target: 'title' | 'description') {
    const value = (event.target as HTMLSelectElement).value;
    const targetStyles = target === 'title' ? this.titleStyles : this.descriptionStyles;
    targetStyles.fontSize = value;
    (target === 'title' ? this.titleStylesChange : this.descriptionStylesChange).emit(targetStyles);
  }

  applyBold(target: 'title' | 'description') {
    const targetStyles = target === 'title' ? this.titleStyles : this.descriptionStyles;
    targetStyles.fontWeight = targetStyles.fontWeight === 'bold' ? 'normal' : 'bold';
    (target === 'title' ? this.titleStylesChange : this.descriptionStylesChange).emit(targetStyles);
  }

  applyItalic(target: 'title' | 'description') {
    const targetStyles = target === 'title' ? this.titleStyles : this.descriptionStyles;
    targetStyles.fontStyle = targetStyles.fontStyle === 'italic' ? 'normal' : 'italic';
    (target === 'title' ? this.titleStylesChange : this.descriptionStylesChange).emit(targetStyles);
  }
}
