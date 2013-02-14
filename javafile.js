//validates the city form
function valcity() {
	var x = ValidateForm.citybox.value;
	if (x==null || x=="")
		//null doesn't allow unknown symbol
		{alert("City must be filled out");
		return false;}
	}

//validates street adress 1
function valst1() {
	var x = ValidateForm.st1box.value;
	if (x==null || x=="")
		{alert("Street Address 1 must be filled out.");
		return false;}
	}

//validates the email form
function valemail()
	{
	var x=ValidateForm.emailbox.value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
		//indexOF determines position of symbol
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  		{
  		alert("Not a valid e-mail address.");
  		return false;
  	}
}

//validates zip code form
function valzip()
	{
	var x=ValidateForm.zipbox.value;
	if (isNaN(ValidateForm.zipbox.value))
			//isNan() checks if the form "is not a number"
		{
  		alert("Please make sure you entered all numbers for the zip code.");
  		return false;
  	}
	if (x==null || x=="")
		{alert("Zip Code must be filled out.");
		return false;}
	}

//Thanks the www.w3schools.com for the basis for my form validation functions