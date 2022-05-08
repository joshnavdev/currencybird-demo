import propTypes from 'prop-types';

function InvitationItem({ invitation }) {
  return (
    <tr>
      <td>{invitation.name}</td>
      <td>{invitation.invitations}</td>
      <td>{invitation.totalAmount}</td>
    </tr>
  );
}

InvitationItem.propTypes = {
  invitation: propTypes.object
};

export default InvitationItem;
