import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import backendApi from '../../apis/backend.api';
import InvitationItem from './InvitationItem';
import './styles.css';

function renderInvitations(invitations) {
  return invitations.map((invitation) => (
    <InvitationItem key={invitation.customerId} invitation={invitation} />
  ));
}

function InvitationManagment() {
  const [totalInvitation, setTotalInvitation] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await backendApi.listInvitationHistories();
      setTotalInvitation(data);
    }

    fetchData();
  }, []);

  return (
    <Container className="mt-3">
      <Table borderless>
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Invitaciones</th>
            <th>Total recibido $</th>
          </tr>
        </thead>
        <tbody>{renderInvitations(totalInvitation)}</tbody>
      </Table>
    </Container>
  );
}

export default InvitationManagment;
