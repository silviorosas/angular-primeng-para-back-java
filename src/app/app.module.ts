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



@NgModule({
  declarations: [
    AppComponent,
    
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
    InputTextModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
