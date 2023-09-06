
export async function getCalDelta(accessToken, userId) {
  const startDateTime = '2023-09-01T00:00:00.0000000';
  const endDateTime = '2023-09-05T11:59:59.0000000';
  const urlApi = `https://graph.microsoft.com/v1.0/users/${userId}/calendarView/delta?startdatetime=${startDateTime}&enddatetime=${endDateTime}`
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", 'application/json');
  headers.append("Prefer", 'odata.maxpagesize=2');

  const options = {
      method: "GET",
      headers: headers
  };

  return fetch(urlApi, options)
      .then(response => response.json())
      .catch(error => console.log(error));
}