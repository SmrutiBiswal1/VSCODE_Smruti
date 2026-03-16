const {test,expect} = require('@playwright/test')


console.log("Hello Worl")
test('My first test', async function({page}){

expect(12).toBe(12)

})

test("My second test",async function ({page}) {

expect(100).toBe(101)

})

test("My third test",async function ({page}) {

expect(2.0).toBe(2.0)

})

test("My fourth test",async function ({page}) {
    expect("Mukesh Otwani").toContain("Mukesh")
    expect(true).toBeTruthy()
  })

test("My fifth test",async function ({page}) {
    expect(false).toBeFalsy()
})


