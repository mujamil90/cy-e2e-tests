describe("Upload File Request", () => {
    it("Upload File by drag and drop", () => {
      cy.visit("https://www.ilovepdf.com/pdf_to_word");
      cy.get("a#pickfiles").selectFile("test.pdf", { action: "drag-drop" });
    });

  });