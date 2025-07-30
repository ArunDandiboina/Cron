import cron from 'node-cron';

console.log('Cron worker started:', new Date().toISOString());

cron.schedule('*/5 * * * *', () => {
  console.log('Running job at', new Date().toISOString());
});

// Keep process alive
setInterval(() => {}, 1000 * 60 * 60);
