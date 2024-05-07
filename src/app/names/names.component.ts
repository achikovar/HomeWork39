import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-names',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './names.component.html',
  styleUrl: './names.component.scss',
})
export class NamesComponent {
  inputText: string = '';
  MyName: string[] = [];

  onClick() {
    this.MyName.push(this.inputText);
    this.inputText = '';
  }

  alternateColors(index: number) {
    const colors = ['#ff0000', '#00ff00'];
    return colors[index % 2];
  }
}
