import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatPageComponent } from './pages/cat-page/cat-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'cats', component: CatPageComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
