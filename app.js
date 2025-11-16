const dom = () => {
  const head = document.head;
  const body = document.body;

  console.log(head, "\n", body);
}

dom();

async function sendMessageToBackend() {
  const API_URL = "http://192.168.1.102/8080/";
  await fetch();
}
