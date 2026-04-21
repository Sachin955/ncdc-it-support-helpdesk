

export const validateField = (name, value) => {
  let error = "";
  const trimmed = value.trim();

  if (name === "emp_id") {
    if (!trimmed) error = "Employee ID is required";
  }

  if (name === "name") {
    if (!trimmed) {
      error = "Name is required";
    } else if (trimmed.length < 3) {
      error = "Name must be at least 3 characters";
    }
  }

  if (name === "email") {
    if (!trimmed) {
      error = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(trimmed)) {
      error = "Invalid email format";
    }
  }

  if (name === "division_name") {
    if (!trimmed) error = "Division is required";
  }

  if (name === "phn_no") {
    if (!trimmed) {
      error = "Phone number is required";
    } else if (!/^\d+$/.test(trimmed)) {
      error = "Only digits allowed";
    } else if (trimmed.length !== 10) {
      error = "Phone number must be 10 digits";
    }
  }

  if (name === "password") {
    if (!trimmed) {
      error = "Password is required";
    } else if (trimmed.length < 6) {
      error = "Password must be at least 6 characters";
    }
  }

  return error;
};


export const isFormValid = (registrationData, error) => {
  const allFilled = Object.values(registrationData).every(
    (val) => val && val.toString().trim() !== ""
  );

  const noErrors = !Object.values(error).some(
    (err) => err && err !== ""
  );

  return allFilled && noErrors;
};

