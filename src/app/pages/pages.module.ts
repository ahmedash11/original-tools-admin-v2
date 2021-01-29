// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../core/core.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HomepageComponent } from './homepage/homepage.component';
import { FileMetaComponent } from './files/files-meta/files-meta.component';

@NgModule({
  declarations: [HomepageComponent, FileMetaComponent],
  entryComponents: [],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CoreModule,
    PartialsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: []
})
export class PagesModule {}
