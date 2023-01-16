const getUser = (username, password) =>
  fetch(
    `http://localhost:3000/users?username=${username}&password=${password}`
  ).then((data) =>
    data.json().then((users) => {
      const user = users[0];

      if (!user) throw Error("Invalid Credentials");

      return user;
    })
  );

const getUserServers = (userId) =>
  fetch(`http://localhost:3000/userServers?userId=${userId}`).then(
    (userServersData) =>
      userServersData
        .json()
        .then((list) => list.map((entry) => entry.serverId))
        .then((serverIdList) => {
          const searchString = serverIdList.map((id) => `id=${id}&`).join("");

          return fetch(`http://localhost:3000/servers?${searchString}`).then(
            (serversData) => serversData.json()
          );
        })
  );

export { getUser, getUserServers };
