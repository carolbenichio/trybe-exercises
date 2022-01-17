const randomNumber = require('../helpers/randomNumber');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('click', ({width, height}) => {
    const x = randomNumber(width.min, width.max);
    const y = randomNumber(height.min, height.max);

    io.emit('position', {x, y});
  })
});