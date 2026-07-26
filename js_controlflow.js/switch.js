// Basic Switch Statement
const role = "editor";

switch (role) {
  case "admin":
    console.log("Full access granted");
    break;
  case "editor":
    console.log("Edit access granted");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("Unknown role");
}

// Multiple Cases Sharing the Same Output (Intentional Fall-through)
const fruit = "apple";

switch (fruit) {
  case "apple":
  case "pear":
  case "banana":
    console.log("This is a common fruit");
    break;
  case "dragonfruit":
  case "papaya":
    console.log("This is an exotic fruit");
    break;
  default:
    console.log("Unknown fruit category");
}

// Switch uses Strict Equality (===)
const statusCode = 200;

switch (statusCode) {
  case "200":
    // This case will NOT execute because "200" (string) !== 200 (number)
    console.log("String match");
    break;
  case 200:
    console.log("Number match success");
    break;
  default:
    console.log("Status unknown");
}

// Switch returning early inside a function (break is not needed)
function getStatusMessage(status) {
  switch (status) {
    case "active":
      return "User is currently active";
    case "inactive":
      return "User is currently inactive";
    default:
      return "Status not found";
  }
}

console.log(getStatusMessage("active"));