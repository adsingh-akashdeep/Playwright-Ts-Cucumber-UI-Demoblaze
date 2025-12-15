import { Before, BeforeAll } from "@cucumber/cucumber";

BeforeAll(async function () {
    console.log("This is executed before all tests")
});

Before(async function () {
    console.log("This is executed before each scenario")
});