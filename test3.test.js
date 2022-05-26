const { users } = require("./index");

describe("users - color & restaurant", () => {
    it("should have unique favorite color attribute", async () => {
        expect(users[0].favoriteColor.size).toBe(4);
        expect(users[1].favoriteColor.size).toBe(3);
    });

    it("should have unique favorite restaurant attribute", async () => {
        expect(users[0].favoriteRestaurant.size).toBe(7);
        expect(users[1].favoriteRestaurant.size).toBe(8);
    });
});
