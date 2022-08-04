import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosService } from './todos.service';
import { TodoComponent } from './todo.component';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ToDoIteamComponentComponent } from './to-do-iteam-component/to-do-iteam-component.component';
import { TooltipDirective } from './tooltip.directive';
import { TodoDonePipe } from './todo-done.pipe';
import { NotificationDynamicComponentComponent } from './notification-dynamic-component/notification-dynamic-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ToDoIteamComponentComponent,
    TooltipDirective,
    TodoDonePipe,
    NotificationDynamicComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
