## Create load mongodb admin user
 mongosh mongodb://mongo:mongo@localhost/admin
 use acropyx2-dev
 db.createUser({user:"admin", pwd:"admin", roles:[{role:"dbOwner", db:"acropyx2-dev"}]})

