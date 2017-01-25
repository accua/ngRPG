  import { ModuleWithProviders } from '@angular/core';
  import { Routes, RouterModule} from '@angular/router';
  import { PlayerCreateComponent } from './player-create/player-create.component'
  import { ScenarioComponent } from './scenario/scenario.component';

  const appRoutes: Routes = [
    {
      path: '',
      component: PlayerCreateComponent
    }, {
      path: 'scenario',
      component: ScenarioComponent
    }
    ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
