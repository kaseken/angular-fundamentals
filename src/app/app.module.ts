import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritePipe } from './favorite/favorite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    FavoriteComponent,
    FavoritePipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
