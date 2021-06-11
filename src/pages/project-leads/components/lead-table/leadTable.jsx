import React from 'react';

import UserIcon from '../user-icon/userIcon';

import { timestampToDate } from '../../../../helpers';

import './leadTable.scss';

const LeadTable = ({ userLeads }) => {
  return (
    <table className='table is-fullwidth is-hoverable'>
      <thead>
        <tr>
          <th />
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Telefono</th>
          <th>Correo electronico</th>
          <th>Fecha de Registro</th>
        </tr>
      </thead>
      <tbody>
        {userLeads.map((lead, index) => (
          <tr key={`lead-user-${index}`}>
            <td>
              <UserIcon />
            </td>
            <td>{lead.first_name}</td>
            <td>{lead.last_name}</td>
            <td>{lead.phone}</td>
            <td>{lead.email}</td>
            <td>{timestampToDate(lead.created_at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
