import { CanDeleteGuard } from "./can-delete.guard";

describe("CanDeleteGuard", () => {
    it("should be defined", () => {
        expect(new CanDeleteGuard()).toBeDefined();
    });
});
