import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isEnglishSelected = true;

  pagesUrl = [
    {
      label: this.isEnglishSelected ? "Bubble Sort" : "Ordenamiento de burbuja",
      url: "bubble-sort"
    },
    {
      label: this.isEnglishSelected ? "Cycle Sort" : "Ordenamiento cíclico",
      url: "cycle-sort"
    },
    {
      label: this.isEnglishSelected ? "Heap Sort" : "Ordenamiento por montículos",
      url: "heap-sort"
    }
  ]
}
