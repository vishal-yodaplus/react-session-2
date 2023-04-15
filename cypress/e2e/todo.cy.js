describe("create todo spec", () => {
    beforeEach(() => {
        // this will launch the page in cypress browser
        cy.visit("http://localhost:3000");
    });


    // 1. Create a todo scenario
    it("successfully create a todo", () => {
        // find an input by tagname
        cy.get("input").type("Sprint meeting");


        // submit form by title of submit button
        cy.get("[title='Add Todo']").click();


        // create another todo
        cy.get("input").type("Coding");


        // submit form by classname of submit button
        cy.get(".submit-button").click();


        // check if new todos exist
        cy.contains("Sprint meeting").should("exist");
        cy.contains("Coding").should("exist");
    });


    // 2. Mark todo as complete / incomplete
    it("Should mark todo", () => {
        cy.get("input").type("Sprint meeting");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Code");
        cy.get("[title='Add Todo']").click();
        // mark a first todo as complete
        cy.get("button.mark-complete").eq(0).click();


        // select using css selector
        cy.get("li:nth-child(2) button.mark").click();
    });


    // 3. Delete a todo
    it("Should delete a todo", () => {
        cy.get("input").type("Sprint meeting");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Code");
        cy.get("[title='Add Todo']").click();
        cy.get("li:nth-child(2) button.delete").click();
    })


    // 4. Filter all, complete and incomplete todos
    it("should filter between all, complete and incomplete todos", () => {
        // create multiple todos
        cy.get("input").type("Sprint meeting");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Code");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Exercising");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Read");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Eat");
        cy.get("[title='Add Todo']").click();
        cy.get("input").type("Code");
        cy.get("[title='Add Todo']").click();


        // mark some as complete
        cy.get("li:nth-child(2) button.mark").click();
        cy.get("li:nth-child(4) button.mark").click();
        cy.get("li:nth-child(6) button.mark").click();


        // filter complete only
        cy.get("button.filter-completed").click();


        // check if only complete exists
        cy.get(".complete").should("exist");
        cy.get(".incomplete").should("not.exist");


        // filter incomplete only
        cy.get("button.filter-active").click();
        cy.get(".complete").should("not.exist");
        cy.get(".incomplete").should("exist");


        // filter all
        cy.get("button.filter-all").click();
        cy.get(".complete").should("exist");
        cy.get(".incomplete").should("exist");
    });

    // 5. 

    it("Should delete all completed", () => {
        cy.get("input").type("Sprint meeting");
        cy.get("[title='Add Todo']").click();
        cy.get(".delete-all").click()
        cy.get(".complete").should("not.exist");


    })



})
