import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { BubbleSort } from '../algorithms/bubble-sort/bubble-sort';
import { CycleSort } from '../algorithms/cycle-sort/cycle-sort';
import { HeapSort } from '../algorithms/heap-sort/heap-sort';
import { QuickSort } from '../algorithms/quick-sort/quick-sort';
import { MergeSort } from '../algorithms/merge-sort/merge-sort';
import { InsertionSort } from '../algorithms/insertion-sort/insertion-sort';
import { SelectionSort } from '../algorithms/selection-sort/selection-sort';
import { ThreeWaysMergeSort } from '../algorithms/three-ways-merge-sort/three-ways-merge-sort';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'bubble-sort', component: BubbleSort },
    { path: 'cycle-sort', component: CycleSort },
    { path: 'heap-sort', component: HeapSort },
    { path: 'insertion-sort', component: InsertionSort },
    { path: 'merge-sort', component: MergeSort },
    { path: 'quick-sort', component: QuickSort },
    { path: 'selection-sort', component: SelectionSort },
    { path: '3-ways-merge-sort', component: ThreeWaysMergeSort },
    { path: '**', component: Home }
];