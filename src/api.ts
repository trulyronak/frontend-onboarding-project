export interface Item {
  uuid: string;
  name: string;
  description: string;
  price: number;
}

export interface User {
  uuid: string;
  username: string;
  password: string;
}

export interface Order {
  uuid: string;
  item: Item;
  user: User;
  createdAt: number;
}

/* These exist so I can create a bunch of method stubs below. They shouldn't be used anywhere */
const emptyUser: User = {
  password: '',
  username: '',
  uuid: '',
};

const emptyItem: Item = {
  description: '',
  name: '',
  price: 0,
  uuid: '',
};

const emptyOrder = {
  uuid: '',
  user: emptyUser,
  createdAt: 0,
  item: emptyItem,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getItems = async (apiUrl: string): Promise<Item[]> => {
  const response = await fetch(`${apiUrl}/items`);
  const data = await response.json();
  return data;
};

export const createItem = async (apiUrl: string, name: string, description: string, price: number): Promise<Item> => {
  const response = await fetch(`${apiUrl}/item`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      price,
    }),
  });
  const data = response.json();
  return data;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteItem = async (apiUrl: string, itemId: string) => {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const orderItem = async (apiUrl: string, userId: string, itemId: string): Promise<Order> => {
  return emptyOrder;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getOrders = async (apiUrl: string, userId: string): Promise<Order[]> => {
  return [];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createAccount = async (apiUrl: string, username: string, password: string): Promise<User> => {
  return emptyUser;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginUser = async (apiUrl: string, username: string, password: string): Promise<User> => {
  return emptyUser;
};
