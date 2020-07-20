import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Product from "./Product";

const Products = ({ match }) => {
  console.log(match);
  return (
    <div className="page__content">
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
      </ul>
      <h1>Products</h1>
      <Switch>
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
        <Route path={`${match.url}/:productId`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
};
export default Products;
