import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NamesComponent } from './names/names.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'HomeWork39';
}
