import * as React from "react";
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import { PostList } from './scenes/account';

const dataProvider = fakeDataProvider({
  data: [
    {
      name: "account_name",
      value: "demo",
      isDate: false
    }, {
      name: "email",
      value: "admin@ozone.one",
      isDate: false
    }, {
      name: "expiry",
      value: 1622876555,
      isDate: true
    }
  ]
})

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource  name="data" list={PostList} />
    </Admin>
);

export default App;
