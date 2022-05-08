import { Container, Table } from 'react-bootstrap';
import InvitationItem from './InvitationItem';
import './styles.css';

const data = [
  { id: 1, name: 'alicia rubio salinas', invitations: 8, totalAmount: 40000 },
  { id: 2, name: 'Alicia Rubio Salinas', invitations: 8, totalAmount: 40000 },
  { id: 3, name: 'Alicia Rubio Salinas', invitations: 8, totalAmount: 40000 }
];

function renderInvitations(invitations) {
  return invitations.map((invitation) => (
    <InvitationItem key={invitation.id} invitation={invitation} />
  ));
}

function InvitationManagment() {
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
        <tbody>{renderInvitations(data)}</tbody>
      </Table>
    </Container>
  );
}

export default InvitationManagment;
