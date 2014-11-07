// JavaScript Document
function createAddress() {
  var first_name =    document.querySelector('#first_name').value,
      last_name =     document.querySelector('#last_name').value,
	  address_ln_1 =  document.querySelector('#address_ln_1').value,
	  address_ln_2 =  document.querySelector('#address_ln_2').value,
	  city =          document.querySelector('#city').value,
	  state =         document.querySelector('#state').value,
	  zip_code =      document.querySelector('#zip_code').value,
	  
	  myAddress = new Address(first_name,
	                    	  last_name,
							  address_ln_1, 
							  address_ln_2,
							  city, 
							  state, 
							  zip_code);
  if( !myAddress ) {
	return false;  
  } else {
	 console.log( myAddress );
	 document.querySelector('#output').innerHTML = myAddress.display_address();  
  }
}

function Address ( first_name, last_name, address_ln_1, address_ln_2, city, state, zip_code ) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.address_ln_1 = address_ln_1;
  this.address_ln_2 = address_ln_2;
  this.city = city;
  this.state = state;
  this.zip_code = zip_code;
  this.full_name = function(){
	return this.first_name + " " + this.last_name;
  }
  this.display_address = function(){
	return this.full_name() + "<br>" + 
	       this.address_ln_1 + "<br>" + 
		   this.address_ln_2 + "<br>" + 
		   this.city + ", " + this.state + " " + this.zip_code; 
  }
}