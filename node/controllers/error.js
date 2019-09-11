const path = require('path')
exports.get404Page = (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','resources','views','404.html'))    
}