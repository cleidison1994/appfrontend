import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SigIn from '~/pages/SigIn';

import DeliveryList from '~/pages/Deliveries/List';
import DeliveryForm from '~/pages/Deliveries/Form';
import DeliveryEdit from '~/pages/Deliveries/Edit';

import DeliverymanList from '~/pages/Deliveryman/List';
import DeliverymanForm from '~/pages/Deliveryman/Form';
import DeliverymanEdit from '~/pages/Deliveryman/Edit';

import RecipientList from '~/pages/Recipient/List';
import RecipientForm from '~/pages/Recipient/Form';
import RecipientEdit from '~/pages/Recipient/Edit';

import ProblemList from '~/pages/Problem/List';
import ProblemForm from '~/pages/Problem/Form';
import ProblemEdit from '~/pages/Problem/Edit';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/sessions" component={SigIn} />

      <Route path="/" exact component={Home} Isprivate />

      <Route path="/deliveryman" component={DeliverymanList} Isprivate />
      <Route path="/deliveryman-new" component={DeliverymanForm} Isprivate />
      <Route path="/deliveryman-edit" component={DeliverymanEdit} Isprivate />

      <Route path="/delivery" component={DeliveryList} Isprivate />
      <Route path="/delivery-new" component={DeliveryForm} Isprivate />
      <Route path="/delivery-edit" component={DeliveryEdit} Isprivate />

      <Route path="/recipient" component={RecipientList} Isprivate />
      <Route path="/recipient-new" component={RecipientForm} Isprivate />
      <Route path="/recipient-edit" component={RecipientEdit} Isprivate />

      <Route path="/problem" component={ProblemList} Isprivate />
      <Route path="/problem-new" component={ProblemForm} Isprivate />
      <Route path="/problem-edit" component={ProblemEdit} Isprivate />
    </Switch>
  );
}
