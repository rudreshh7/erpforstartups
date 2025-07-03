// Test employee creation API directly
async function testEmployeeCreation() {
  try {
    const payload = {
      name: "Test Employee",
      email: "test@example.com",
      role: "USER",
      departmentId: 1,
      salary: 50000,
      hireDate: "2025-01-01",
    };

    console.log("Testing employee creation with payload:", payload);

    const response = await fetch("http://localhost:3001/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log("✅ Employee created successfully:", result);
    } else {
      console.error("❌ Error creating employee:");
      console.error("Status:", response.status);
      console.error("Error:", result);
    }
  } catch (error) {
    console.error("❌ Network error:", error);
  }
}

testEmployeeCreation();
