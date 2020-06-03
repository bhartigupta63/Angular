import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';
import { JwtHelperService} from '@auth0/angular-jwt';


@Directive({
  selector: '[appRole]'
})
export class RoleDirective {
  @Input() set appRole(role: string){
    if (this.jwtService.isTokenExpired()){
      this.viewContainer.clear();

    }
    else{
      const token = this.jwtService.decodeToken();
      if(token['role']=== role){
        this.viewContainer.createEmbeddedView(this.template);

      }
      else{
        this.viewContainer.clear();
      }
    }
  }

  constructor(private readonly jwtService : JwtHelperService,
    private readonly template: TemplateRef<HTMLElement>,
    private readonly viewContainer: ViewContainerRef ) { }

}
