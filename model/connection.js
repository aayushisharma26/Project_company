const knex=require('knex')({
    client:'mysql',
    connection:{
        host:'127.0.0.1',
        user:'root',
        password:'Pooja@123',
        database: 'Details'
    }
})

knex.schema.hasTable('nisway_project').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('nisway_project', function(t) {
        t.increments('user_id').primary();
        t.string('Date',255);
        t.string('Age', 255);
        t.string('Industry', 255);
        t.string('Jobtitle', 255);
        t.string('Annualsalary', 255);
        t.string('Currency', 255);
        t.string('Location', 255);
        t.string('Experience', 255);
        t.string('AdditionalContext', 255);
        t.string("OtherCurrency",255)

        
      })
      .then(()=>{
          console.log("Table created")
      }).catch(()=>{
          console.log("Table already exits")
      })
    }

  });

  module.exports=knex
