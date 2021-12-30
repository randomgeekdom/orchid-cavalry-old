import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AssignmentsComponent from './pages/assignments/assignments.component';
import UnitsComponent from './pages/units/units.component';
import WorldComponent from './pages/world/world.component';

const routes: Routes = [

  { path: 'Assignments', component: AssignmentsComponent },
  { path: 'Units', component: UnitsComponent },
  { path: 'World', component: WorldComponent },
  { path: '',   redirectTo: 'Assignments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
