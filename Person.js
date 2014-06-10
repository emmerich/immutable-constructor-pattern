(function() {
    "use strict";
    
    function Person(spec) {
        var firstName = spec.firstName,
            lastName = spec.lastName,
            getName = function() {
                return firstName + " " + lastName;
            };
        
            return Object.freeze({
                getName: getName
            });
    };
    
    var james_bond = new Person("James", "Bond");
    console.log(james_bond.firstName);
    console.log(james_bond.getName());
    
    james_bond.getName = function() {
        return "Jimmy Bond";
    };
    
})();

