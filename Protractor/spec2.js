describe('protractor test', function(){
    it('opens calculator', function(){
        //browser.waitForAngularEnabled(false)
        browser.get('http://juliemr.github.io/protractor-demo/')
        console.log("hello")
        element(by.model('first')).sendKeys(3)
        element(by.model('second')).sendKeys(5)
        element(by.id('gobutton')).click()
        browser.sleep(10000)
    })
})