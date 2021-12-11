const getToken = (state) => state.auth.token;

const isAuthenticated = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;
const getUserEmail = (state) => state.auth.user.email;
const getUserAvatarURL = (state) => state.auth.user.avatarURL;

const selectors = {
  getToken,
  isAuthenticated,
  getUserName,
  getUserEmail,
  getUserAvatarURL,
};
export default selectors;
