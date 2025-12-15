import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Journey } from './journey/journey';
import { Work } from './work/work';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'journey', component: Journey},
    { path: 'work', component: Work},
    { path: 'about', component: About},
    { path: '**', redirectTo: '' },
];
