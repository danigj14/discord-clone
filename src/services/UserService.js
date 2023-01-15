const getUser = (username, password) =>
  fetch(
    `http://localhost:3000/users?username=${username}&password=${password}`
  ).then((data) => data.json().then((users) => users[0]));

export default getUser;
