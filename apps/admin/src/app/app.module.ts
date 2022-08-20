import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { InputSwitchModule } from 'primeng-lts/inputswitch';

import { CardModule } from 'primeng-lts/card';
import { ToolbarModule } from 'primeng-lts/toolbar';
import { ButtonModule } from 'primeng-lts/button';
import { TableModule } from 'primeng-lts/table';
import { CategoriesService } from '@bluebits/products';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ToastModule } from 'primeng-lts/toast';
import { ConfirmationService, MessageService } from 'primeng-lts/api';
import { ConfirmDialogModule } from 'primeng-lts/confirmdialog';
import { ColorPickerModule } from 'primeng-lts/colorpicker';
import { InputNumberModule } from 'primeng-lts/inputnumber';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { DropdownModule } from 'primeng-lts/dropdown';
import { EditorModule } from 'primeng-lts/editor';




const UX_MODULE = [
  CardModule, EditorModule, DropdownModule, InputSwitchModule, InputTextareaModule, InputNumberModule, ColorPickerModule, BrowserAnimationsModule, ToastModule, InputTextModule, TableModule, ToolbarModule, ButtonModule, ConfirmDialogModule,
]

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'categories',
        component: CategoriesListComponent
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/form',
        component: ProductsFormComponent
      },
      {
        path: 'products/form/:id',
        component: ProductsFormComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent, ProductsListComponent, ProductsFormComponent,],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }), ...UX_MODULE,
  ],
  providers: [CategoriesService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
