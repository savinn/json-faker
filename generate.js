module.exports = function(){
	var faker=require("faker");
	var_=require("lodash");
	return{
		products:_.times(100,function(n)){
              id:n,
              title:faker.commerce.product(),
              description:faker.commerce.productMaterial(),
              status:faker.internet.status(),
              color:faker.internet.color(),
              image:faker.image.image(),
              avatar:faker.image.avatar(),
              price:faker.commerce.price(),

		}

		
	}
}