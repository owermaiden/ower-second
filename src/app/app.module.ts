import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './routing/details/details.component';
import { ParentComponent } from './xcomp/parent/parent.component';
import { ChildComponent } from './xcomp/child/child.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { AnewcompComponent } from './foldername/anewcomp/anewcomp.component';
import { AnotherComponent } from './foldername/another/another.component';
import { LeftComponent } from './intercomm/left/left.component';
import { RightComponent } from './intercomm/right/right.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  
  {path:'bindings', component: BindingComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'routes', component: RoutingComponent},
  {path:'mentor/:id', component:DetailsComponent},
  {path:'xcomp', component: ParentComponent},
  {path:'servicedemo', component: ServiceDemoComponent},
  {path:'left', component:LeftComponent},
  {path:'right', component: RightComponent},
  {path:'posts', component:PostComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    RoutingComponent,
    DetailsComponent,
    ParentComponent,
    ChildComponent,
    ServiceDemoComponent,
    AnewcompComponent,
    AnotherComponent,
    LeftComponent,
    RightComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
