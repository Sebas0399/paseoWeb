export default class PaseoWebSocket {
  private socket: WebSocket;

  constructor(url: string) {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WebSocket conectado');
    };

    this.socket.onclose = () => {
      console.log('WebSocket desconectado');
    };

    this.socket.onerror = (error) => {
      console.error('Error en WebSocket:', error);
    };
  }

  enviarUbicacion(latitud: number, longitud: number): void {
    const ubicacion = { latitud, longitud };
    console.log(JSON.stringify(ubicacion))
    this.socket.send(JSON.stringify(ubicacion));
  }
}
