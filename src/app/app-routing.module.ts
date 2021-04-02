import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { HomeComponent } from './home/home.component';
import { SingleCharacterComponent } from './single-character/single-character.component';

const routes: Routes = [
  {
    path: 'characters',
    component: AllCharactersComponent,
  },
  {
    path: 'character/:id',
    component: SingleCharacterComponent,
  },
  {path: '',
  component: HomeComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
