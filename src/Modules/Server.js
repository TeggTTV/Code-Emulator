import { useEffect, useState } from 'react';

import { createProxyMiddleware } from 'http-proxy-middleware';

const proxy = createProxyMiddleware('/api', {
  target: 'http://localhost:3001',
});

function Server() {
  const [directories, setDirectories] = useState([]);

  useEffect(() => {
    fetch('/directories')
      .then(res => { console.log(res) })
      .then(data => { console.log(data) })
    // .catch(err => { console.error(err) })
  }, []);

  return (
    <div>
      <h1>Directories:</h1>
      <ul>
        {directories.map(dir => (
          <li key={dir}>{dir}</li>
        ))}
      </ul>
    </div>
  );
}

export default Server;