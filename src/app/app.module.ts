import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
//para api rest con java
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';





@NgModule({
  declarations: [
    AppComponent,    
    ProductoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    FieldsetModule,
    CardModule,
    FormsModule,
    CascadeSelectModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    MenubarModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule
   

  ],
  providers: [
    MessageService,
    ConfirmationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
