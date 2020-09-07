const db = require('./model.js') 

module.exports = {
    getPhotos(){
        return new Promise( (resolve,reject)=>{
            db.query("select * from `photos`", function(err,rs){
                if ( err ) {
                    reject(err)
                } else {
                    resolve(rs)
                }
            })
        } )
    },
    addPhoto(newData){
        return new Promise( (resolve,reject)=>{
            db.query("insert into `photos` (`img_name`) values (?) ",newData, function(err,rs){
                if ( err ) {
                    reject(err)
                } else {
                    console.log('成功')
                    resolve(rs)
                }
            })
        } )
    }
}