var Value=require('../model/ArrayModel') // schema


module.exports.register=(request,response)=>{    
    var data=request.body.data;
    var Input=request.body.Input    
    new Value ({
       data:data,
       Input:Input
    }).save().then((data)=>{
       console.log(data)      
   })
}

module.exports.result=(request,response)=>{
   var val=request.body
   var arr=[]; 
   for(var dat of val.data){
       var val1=dat.value.split("-")[0];
       var val2=dat.value.split("-")[1]; 
       for(){
             arr.push()
       }
    //   console.log(val1,val2)  
   }
   response.json({
       "data":arr
   })
    // var data=request.body.data;
    // var Input=request.body.Input;
    // //var output=Input.split("");
    // for(var values in result){
    //     var value = values.data;
    // }
    // Value.findOne({'data':data}, function(err,result) {
    //     if(err){
    //         console.log(err);
    //         return response.send(err);
    //     }
    //     return response.json(result);

    // })
}