import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { IfRenderComponent } from './componentes/if-render/if-render.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBindingComponent } from './componentes/two-way-binding/two-way-binding.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';
import { DataFormComponent } from './componentes/data-form/data-form.component';

const routes: Routes = [
  {path: '', component: PrimeiroComponenteComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list:/id', component: DetalhesItemComponent},
  {path: 'diretivas', component: DiretivasComponent},
  {path: 'if-render', component: IfRenderComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'two-way-binding', component: TwoWayBindingComponent},
  {path: 'form', component: DataFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
