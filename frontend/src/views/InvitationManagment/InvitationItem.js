import propTypes from 'prop-types';

function InvitationItem({ invitation }) {
  const numberWithDots = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <tr>
      <td>{invitation.fullName}</td>
      <td>{invitation.total}</td>
      <td>${numberWithDots(invitation.amount)}</td>
    </tr>
  );
}

InvitationItem.propTypes = {
  invitation: propTypes.object
};

export default InvitationItem;
