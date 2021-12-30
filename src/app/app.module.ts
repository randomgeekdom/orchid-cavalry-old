import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import AssignmentsComponent from './pages/assignments/assignments.component';
import { PubsubModule } from '@fsms/angular-pubsub';
import UnitsComponent from './pages/units/units.component';
import { UnitviewComponent } from './components/unitview/unitview.component';
import WorldComponent  from './pages/world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    UnitsComponent,
    UnitviewComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PubsubModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
