
const sendRequests = () => {
  alert("Hola");

  async function getData() {
    const API_URL = "http://192.168.1.3:8080/message";

    const response = await fetch(API_URL, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Ha ocurrido un error: ${response.status}`);
  }

    const json = await response.json();
    const text = json.message;

    alert(`Respuesta del backend: ${text}`);
    console.log(`Response Of Backend: ${text}
  ${json}`
    );
  }

  getData();
}
