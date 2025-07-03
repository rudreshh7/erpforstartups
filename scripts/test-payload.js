// Test the employee creation API locally
const testPayload = {
  name: "Test Employee",
  email: "test@example.com",
  role: "USER",
  departmentId: 1,
  salary: 50000,
  hireDate: "2025-01-01",
};

console.log("Testing payload:", JSON.stringify(testPayload, null, 2));

// Test if the payload can be serialized and parsed correctly
const jsonString = JSON.stringify(testPayload);
const parsed = JSON.parse(jsonString);
console.log("Parsed payload:", parsed);

// Test date conversion
const hireDate = parsed.hireDate ? new Date(parsed.hireDate) : null;
console.log("Converted date:", hireDate);
