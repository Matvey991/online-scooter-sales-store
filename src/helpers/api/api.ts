export const getScooters = async () =>
  await fetch("http://localhost:8000/scooters", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      authorization: `Bearer fsdfsdfs`,
    },
  })
    .then((res) => {
      if (res.status !== 200) {
        return res.json().then((data) => {
          throw new Error(data.message);
        });
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });

export const getLogit = async (data: string) =>
  await fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
