/* higher-order components (HOCs) are the components that take a component as input and return another component as output. */

import React from 'react';

export const withUser = (Component) => (props) => {
  const user = {
    name: 'Dinesh',
    authtenticated: true,
    email: 'dinesh@email.com',
    address: 'Chennai',
  };
  return <Component user={user} {...props} />;
};

const Hoc1 = (props) => {
  return (
    <div className="App">
      <h1>Hoc1 component</h1>
      <p>Name: {props.user.name}</p>
      <p>Enail: {props.user.email}</p>
    </div>
  );
};

const Hoc2 = (props) => {
  return (
    <div className="App">
      <h1>Hoc2 component</h1>
      <p>Name: {props.user.name}</p>
      <p>Address: {props.user.address}</p>
    </div>
  );
};

export const BasicDetails = withUser(Hoc1);
export const AddressDetails = withUser(Hoc2);
// export default withUser(Hoc);
