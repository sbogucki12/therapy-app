#!/usr/bin/env node

// Future script to run both frontend and backend concurrently
// For now, just runs the frontend

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Affirmation Companion Development Environment...\n');

// Start frontend
console.log('📱 Starting Frontend (React)...');
const frontend = spawn('npm', ['start'], {
  cwd: path.join(__dirname, '..', 'frontend'),
  stdio: 'inherit',
  shell: true
});

frontend.on('error', (err) => {
  console.error('❌ Frontend failed to start:', err);
});

// Future: Add backend startup here
// console.log('🔧 Starting Backend (Node.js/Python/C#)...');
// const backend = spawn('npm', ['start'], {
//   cwd: path.join(__dirname, '..', 'backend'),
//   stdio: 'inherit',
//   shell: true
// });

process.on('SIGINT', () => {
  console.log('\n⏹️  Shutting down development environment...');
  frontend.kill();
  // backend.kill(); // Future
  process.exit(0);
});