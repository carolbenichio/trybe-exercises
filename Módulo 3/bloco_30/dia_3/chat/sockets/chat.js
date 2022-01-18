module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('msg', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');

  socket.on('clientMessage', (message) => {
    console.log(`Mensagem ${message}`);
    io.emit('msg', message);
  });
});