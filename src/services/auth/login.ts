export async function loginRequest(_phone: string) {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    const u = data.results?.[0];
    const fullName = `${u.name.first} ${u.name.last}`;
    const email = u.email as string;
    const picture = u.picture?.thumbnail ?? u.picture?.medium ?? "";
    return { name: fullName, email, picture } as const;
  }