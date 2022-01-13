import React, { useState } from 'react';
import { Order } from '../../api';
import Navbar from '../../components/Navbar';
import './style.less';

// when implementing pages dependent on data, i find it helpful to get the styling right using a
// temporary array of data. then, once styling is finished, you can implement the api calls to get it all working
const exampleOrders: Order[] = [
  {
    createdAt: Date.now(),
    uuid: 'some id',
    item: {
      name: 'Pineapple',
      price: 2.5,
      uuid: 'some other id',
      description: "spongebob's home",
    },
    user: {
      username: 'a user',
      password: "in a real system, this wouldn't be exposed on the client like this",
      uuid: 'another id',
    },
  },
];
const YourOrders: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = useState<Order[]>(exampleOrders);

  return (
    <>
      <Navbar title="Your Orders" />
      <div className="yourOrders">
        <p>
          For this page, you can use a variety of approaches. If you&apos;re uncertain, I recommend asking your mentor about which way to go about
          implementing this!
        </p>
        <h4>Orders so far</h4>
        <pre>{JSON.stringify(orders)}</pre>
      </div>
    </>
  );
};

export default YourOrders;
