import { User } from "@/types/user";
import { saveUser, getUser, clearUser } from "./storage";

const sample: User = { name: "John Doe", email: "j@d.com", picture: "" };

describe("storage", () => {
  beforeEach(() => localStorage.clear());
  it("saves and retrieves", () => {
    saveUser(sample);
    expect(getUser()).toEqual(sample);
  });
  it("clears user", () => {
    saveUser(sample);
    clearUser();
    expect(getUser()).toBeNull();
  });
});
