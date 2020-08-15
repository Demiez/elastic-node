const esClient = require('./es-service');

esClient.ping(
  {
    requestTimeout: 1000,
  },
  (error) => {
    if (error) {
      console.trace('ES Cluster is down')
    } else {
      console.log('ES is running')
    }
  }
);
