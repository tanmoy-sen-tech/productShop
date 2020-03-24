import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./module/member/member.module`).then(m => m.MemberModule)
  },
  {
    path: 'list',
    loadChildren: () => import(`./module/list/list.module`).then(m => m.ListModule)
  },
  {
    path: 'member',
    loadChildren: () => import(`./module/member/member.module`).then(m => m.MemberModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
