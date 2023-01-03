import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodesComponent } from './foodes/foodes.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    component: MoviesComponent,
    path: 'movies',
  },
  {
    component: FoodesComponent,
    path: 'foods'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
