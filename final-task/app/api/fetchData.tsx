// api/fetchData.ts

// utils/fetchAuth.ts

export type FormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  OTP: string;
};
type verifyType = {
  email: string;
  OTP: string;
};
export async function fetchData() {
  try {
    const res = await fetch(
      "https://akil-backend.onrender.com/opportunities/search"
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch API data: ${res.status}`);
    }
    const { data } = await res.json(); // Ensure you await this
    // console.log(data);
    return data; // Return the entire result for further processing
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
}

// api/fetchData.ts
export async function fetchById(id: string) {
  try {
    const res = await fetch(
      `https://akil-backend.onrender.com/opportunities/${id}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch API data: ${res.status}`);
    }
    const { data } = await res.json(); // Ensure you await this
    console.log(data);
    return data; // Return the entire result for further processing
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
}

export async function fetchLogin(data: FormType) {
  const res = await fetch(`https://akil-backend.onrender.com/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || "Invalid credentials");
  }

  return res.json();
}
export async function fetchSignUp(data: FormType) {
  const res = await fetch(`https://akil-backend.onrender.com/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message);
  }
  return res.json();
}

export async function VerifyEmail(data: verifyType) {
  const { email, OTP } = data;

  const res = await fetch(`https://akil-backend.onrender.com/verify-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, OTP }),
  });
  console.log(res, "from optionnnnnnnnnnnnnn");
  // if (!res.success) {
  //   const errorResponse = await res.json();
  //   throw new Error(errorResponse.message);
  // }
  return res.json();
}
