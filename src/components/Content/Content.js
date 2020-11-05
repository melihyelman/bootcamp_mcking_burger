import React from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../config/Router";
import { Wrapper } from "./Content.styles";

const Content = () => {
  return (
    <Wrapper>
      <Switch>
        {routes.map((route, i) => (
          <Route exact={route.exact} path={route.path} key={i}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Wrapper>
  );
};

export default Content;
