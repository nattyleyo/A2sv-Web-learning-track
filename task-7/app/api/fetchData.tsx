// api/fetchData.ts
export async function fetchData() {
  try {
    const res = await fetch(
      "https://akil-backend.onrender.com/opportunities/search"
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
