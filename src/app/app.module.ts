import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SchemasModule } from './schemas/schemas.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'schemas',
    loadChildren: () => import('app/schemas/schemas.module').then(m => m.SchemasModule)
  },
  {
    path: 'configurations',
    loadChildren: () => import('app/configurations/configurations.module').then(m => m.ConfigurationsModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('app/crud/crud.module').then(m => m.CrudModule)
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SchemasModule, FormsModule,
    RouterModule.forRoot(
      APP_ROUTES
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

