(function(){
	
	function myCtrl(){

		var vm=this;

		vm.selectUser=selectUser;		
		vm.userList = [
	      new User("Rares", "Stelian"),
	      new User("Sorin", "Todirut"),
	      new User("Alin", "Ilies"),
	      new User("lucian", "Bob")
	    ];
		// vm.currentUser =vm.userList[0]; programul functioneaza chiar daca lista nu se initializeaza 

		function selectUser(user) {
	      vm.currentUser = user;
		};

		function User(firstName, lastName) {
		   this.firstName = firstName;
		   this.lastName = lastName;
		   this.getFullName = function(){
			return this.firstName+" "+this.lastName;
			}
		};
	};

	angular
		.module("myApp",[])
		.controller("myCtrl", myCtrl);
		
})();