import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'budget-planner/dashboard',
      pathMatch: 'full'
    },
    {
      path:'budget-planner',
      loadChildren:()=> import('./budget-planner/budget-planner.module').then(m=> m.BudgetPlannerModule)
   }
];
