import axios from 'axios';

const api = axios.create({
  baseUrl: process.env.REACT_APP_BACKEND_API_BASE_URL
});

async function createInvitation(email, fullName) {
  const data = { email, fullName };
  return api({
    method: 'post',
    url: 'invitations',
    data
  });
}

async function invitationRegister(code, customerData) {
  const data = { ...customerData, invitationCode: code };
  return api({
    method: 'post',
    url: 'auth/invitation-signup',
    data
  });
}

async function listInvitationHistories() {
  return api({
    method: 'get',
    url: 'invitations/histories'
  });
}
export default {
  createInvitation,
  invitationRegister,
  listInvitationHistories
};
