import io from 'socket.io-client';

export default function Page() {
  const socket = io('http://localhost:1337');
  socket.emit('input', 'Hello from the frontend');

  socket.on('output', (data) => {
    console.log(`Output from server: ${data}`);
  });

  return <h1>Hello, Next.js!</h1>
}