# Node.js SSE with Next.js and React

This project demonstrates how to implement Server-Sent Events (SSE) with a Node.js backend and a Next.js + React frontend. 
The setup is intended for learning purposes and can be further enhanced to be more useful with project based requirments.

## Features
- Real-time updates using SSE
- Simple Node.js backend with Express
- Next.js frontend to receive and display real-time data

## Getting Started

To run the backend, navigate to the root of the backend folder and run the following commands:
```sh
npm install 
npm start 
```
This will start the Node.js service on port 5000.

To run the frontend, navigate into the `sse_demo` folder and run the following commands:
```sh
npm install
npm run dev
```
This will start the Next.js web app on port 3000.

On the frontend, you will receive timestamps that are continuously generated and sent by the server. This project serves as a foundational example and can be extended to include more interactive features, such as user-specific notifications, real-time data streaming, or custom event handling.

