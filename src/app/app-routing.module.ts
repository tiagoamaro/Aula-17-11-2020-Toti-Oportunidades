import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './sobre/fale-conosco/fale-conosco.component';
import { FaqComponent } from './sobre/faq/faq.component';
import { HistoriaComponent } from './sobre/historia/historia.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'sobre', component: SobreComponent, children: [
      {
        path: 'faq', component: FaqComponent,
      },
      {
        path: 'historia', component: HistoriaComponent,
      },
      {
        path: 'fale-conosco', component: FaleConoscoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
