// Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.

// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

let grabInfo = (function () {
   let pii = {
        name: "John",
        ssn: "444-444-444",
    };
    return{
        getName: function () {
            return pii.name;
            }
        }
})();

grabInfo.getName();


// let grabInfo = function () {
//     const customerInfo = {
//         name: "John",
//         ssn: "444-444-444",
//         getName: () => {
//             return customerInfo.name;
//         }
//     }

      
//     return { getName: customerInfo.name } // { getName: getName }
//  }

//  console.log(grabInfo());
//  const publicCustomerInfo = grabInfo();
//  console.log(publicCustomerInfo.getName());

//  let customerInfo = function () {
//     const getInfo = {
//         name: "John",
//         ssn: "444-444-444",
//         getName: () => {
//             return getInfo.name;
//         }
//     }

      
//     return { 
//         getName: getInfo.getName, 
//     }
//  }

//  const getInfo = customerInfo();
