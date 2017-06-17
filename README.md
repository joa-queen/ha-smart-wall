## Configuration

Add a `config.js` file to the root of the project, with your Home Asssitant data:

 ```
 export default {
    apiHost: 'https://yourdomain/api',
    socket: 'wss://yourdomain/api/websocket',
    password: 'yourHApassword',
}
```

First of all, remember install all dependencies: `npm install`.

On the server, run `npm run build` and then `npm run start`. Enjoy!
