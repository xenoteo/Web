import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {NewProductComponent} from "./components/new-product/new-product.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";


const routes: Routes = [
  { path: "home", component: ProductComponent},
  { path: "new-product", component: NewProductComponent},
  { path: "login", component: LoginComponent},
  { path: "registration", component: RegistrationComponent},
  { path: "", redirectTo: "home", pathMatch: "full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
