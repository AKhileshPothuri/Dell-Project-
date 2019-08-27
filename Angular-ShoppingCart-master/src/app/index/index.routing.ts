import { LoginComponent } from "./login/login.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "./index.component";
//import { counterComponent } from "./navbar/counterComponent";

export const IndexRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      }//,
      // {
      //   path: "counter",
      //   component: counterComponent
      // }
    ]
  }
];
