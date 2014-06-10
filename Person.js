(function() {
    "use strict";
    
    function Person(spec) {
    
        var first_name = spec.firstName,
            last_name = spec.lastName,
        
            getName = function() {
                return first_name + " " + last_name;
            };
        
            return Object.freeze({
                getName: getName
            });
    };
    
    var james_bond = new Person("James", "Bond");
    console.log(james_bond.first_name);
    console.log(james_bond.getName());
    
    james_bond.getName = function() {
        return "Jimmy Bond";
    };
    
})();

