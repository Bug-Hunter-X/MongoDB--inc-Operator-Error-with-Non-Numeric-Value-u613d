# MongoDB $inc Operator Error with Non-Numeric Value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment a numeric field by a specified value. However, if you attempt to increment a field with a non-numeric value, MongoDB will throw an error. 

The `bug.js` file shows the incorrect usage of the `$inc` operator. The `bugSolution.js` file shows the correct usage of the `$inc` operator.