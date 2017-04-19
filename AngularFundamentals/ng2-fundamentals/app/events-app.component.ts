
/**
 * Created by phuc.ngo on 3/04/2017.
 */
import {Component} from '@angular/core'
import { AuthService } from './user/auth.service'
@Component({
    selector: 'event-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>`
})
export class EventsAppComponent {
    constructor(private auth:AuthService){
        
    }

    ngOnInit(){
        this.auth.checkAuthenticationStatus()
    }
}