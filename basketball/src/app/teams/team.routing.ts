import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TeamListComponent} from './team-list/team-list.component';

const routes: Routes = [
	{
		path: '',
		component: TeamListComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TeamsRoutingModule { }
