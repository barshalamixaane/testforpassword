describe('protractor test', function(){
    it('opens login page', function(){
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:8080/login')
       
    })
})