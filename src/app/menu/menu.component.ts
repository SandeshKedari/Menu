import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  icons: string[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  categories: string[] = [
    'SAPORE DI MARE', 'BREAKFAST', 'SALAD', 'SOUP',
    'SHARING', 'PASTA', 'RISOTTO', 'PIZZA',
    'MAIN', 'KIDS MENU', 'DESSERT'
  ];

  activeCategory: string = 'SAPORE DI MARE';

  menuItems: MenuItem[] = [
    {
      name: 'TONNO CRUDO',
      description: 'Chutoro bluefin tuna, fragrant basil pesto, citrus crema, crispy rice, toasted sesame',
      price: 'AED99.00',
      image: 'assets/images/Sample.jpeg',
      icons: ['🐟','🌿','🍋']
    },
    {
      name: 'HAMACHI CARPACCIO',
      description: 'Delicate yellowtail carpaccio, chilled cucumber emulsion, caviar, chives, basil',
      price: 'AED89.00',
      image: 'assets/images/Sample.jpeg',
      icons: ['🥒','🐟']
    },
    {
      name: 'TRIS DI OSTRICHE',
      description: 'A trio of oysters, finished with green gazpacho, citrus crema, and Amalfi lemon',
      price: 'AED99.00',
      image: 'assets/images/Sample.jpeg',
      icons: ['🦪','🍋','🌿']
    }
  ];

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  languages = ['English', 'Arabic', 'Italian'];
  selectedLang = 'English';

  toggleSidebar() {
    alert('Sidebar toggled! (You can connect this to your sidebar logic)');
  }

  login() {
    alert('Redirecting to login page...');
  }

  // changeLang(lang: string) {
  //   this.selectedLang = lang;
  // }
}
