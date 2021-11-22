module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        url: ['https://www.thoughtworks.com/']
      },
      upload: {
        /* Add configuration here */
        target: 'lhci',
        serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
        token: '${LHCI_TOKEN}', // could also use LHCI_TOKEN variable instead
      },
    },
  };