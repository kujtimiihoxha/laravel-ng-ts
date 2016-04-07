module App.Tests {
    class AppTest {
        @Describe({
            name: "First Test"
        })
        static tests(deps: any) {
            it("Should do something", () => {
                expect(2).toBe(2);
            });
        }
    }
}