import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {
   showInput: boolean = true;
  inputValue: string = '';

  onDropdownChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.showInput = selectedValue === 'show';
  }
}