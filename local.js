module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        url: ['https://www.thoughtworks.com/']
      },
      upload: {
        /* Add configuration here */
        target: 'filesystem',
        outputDir:'./lhci'
      },
    },
  };