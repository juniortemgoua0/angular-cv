import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EditComponent } from './pages/edit/edit.component';
import { ProfilComponent } from './components/profil/profil.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { CursusComponent } from './components/cursus/cursus.component';
import { EditGuard } from './guard/edit.guard';
import { AuthService } from './services/auth.service';
import { SingleSkillComponent } from './components/single-skill/single-skill.component';
import { ExperienceHeaderComponent } from './components/experience-header/experience-header.component';
import { ExperienceMainComponent } from './components/experience-main/experience-main.component';
import { ButtonOptionComponent } from './components/button-option/button-option.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarsComponent } from './components/stars/stars.component';
import { SingleExperienceComponent } from './components/single-experience/single-experience.component';
import {FormsModule} from "@angular/forms";
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    ProfilComponent,
    SkillComponent,
    ExperienceComponent,
    HobbiesComponent,
    CursusComponent,
    SingleSkillComponent,
    ExperienceHeaderComponent,
    ExperienceMainComponent,
    ButtonOptionComponent,
    SearchBarComponent,
    ProgressBarComponent,
    StarsComponent,
    SingleExperienceComponent,
    EditSkillComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [EditGuard , AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
