var create=require('./connection')
const saral_data=require('../csvjson.json')
for (i of saral_data){
    create('nisway_project').insert({
        Date: i.Date,
        Age: i.Age,
        Industry: i.Industry,
        Jobtitle: i.Jobtitle,
        Annualsalary:i.Annualsalary,
        Currency: i.Currency,
        Location:i.Location,
        Experience: i.Experience,
        AdditionalContext: i.AdditionalContext,
        OtherCurrency:i.OtherCurrency
    })
    .then(()=>{
        console.log('insert')
    }).catch((err)=>{
        console.log(err)
    })

}