module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        url: ['https://www.thoughtworks.com/']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 0.3}],
          'categories:accessibility': ['error', {minScore: 0.9}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'filesystem',
        outputDir:'./lhci'
      },
    },
  };