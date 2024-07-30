// src/app/content.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private title: string = 'Dance Journey';
  private content: string = `Starting dance in high school has been awesome and really eye-opening. l've learned so much from the basic moves to performing on stage, and it's been fun and challenging. It's also been a cool way to get fit and learn about different types of dances and their backerounds`;

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }

  setContent(newContent: string): void {
    this.content = newContent;
  }
}
