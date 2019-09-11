exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', // direct connect by selenium server start
    specs: ['spec2.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
        args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
        }
    }
};