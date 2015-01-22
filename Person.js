(function() {
    "use strict";
    
    function Person(spec) {
        var firstName = spec.firstName;
        var lastName = spec.lastName;
        
        return Object.freeze({
            getName: function() {
                return firstName + " " + lastName;
            }
        });
    };
        
    Person.prototype.getFullName = function() {
        return "no visibility";
    }

    var james_bond = new Person({ firstName: "James", lastName: "Bond"});
    console.log(james_bond.firstName);
    console.log(james_bond.getName());

    james_bond.getName = function() {
        return "Jimmy Bond";
    };

    console.log(james_bond.getName());
    console.log(james_bond.getFullName());
    
})();

