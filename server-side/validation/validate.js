const validate = (schema, Inputs) =>{
    return schema.validattAsync(Inputs,{
        abortEarly:false
    })
}; 

module.exports=validate;