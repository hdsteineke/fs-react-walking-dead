import React from 'react';
import MaterialTable from 'material-table';
import { data } from './data.js';

export default function MyTable() {

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
          { title: 'Gender', field: 'birthYear', type: 'numeric' },
          { title: 'Email', field: 'birthCity' },
          { title: 'IP Address', field: 'ip_address' }
        ]}
        data={data}
        title="Customer Data"
      />
    </div>
  );
}



//   return (
//     <div>MyTable</div>
//   );
