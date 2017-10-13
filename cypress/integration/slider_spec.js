describe('Slider tests', () =>  {
    beforeEach(() => cy.visit('/'));

    it('Starts with the first slide selected', () => {
        cy.get("#main-slider .thumbnail:first").should("have.class", "selected");
        
        thumbnailPictureShouldBeShown("#main-slider .thumbnail:first");
    });

    it("If second thumbnail is clicked, it will be selected", () => {
        cy.get("#main-slider .thumbnail:nth-child(2)")
          .should("not.have.class", "selected")
          .click()
          .should("have.class", "selected");
        
        thumbnailPictureShouldBeShown("#main-slider .thumbnail:nth-child(2)");
    });

    it("If right arrow is clicked, the second thumbnail is selected", () => {
        cy.get("#main-slider .thumbnail:nth-child(2)")
          .should("not.have.class", "selected");

        cy.get("#main-slider .slider-arrow-right").click();

        cy.get("#main-slider .thumbnail:nth-child(2)")
          .should("have.class", "selected");

        thumbnailPictureShouldBeShown("#main-slider .thumbnail:nth-child(2)");
    });

    it("If left arrow is clicked, the last thumbnail is selected", () => {        
        cy.get("#main-slider .thumbnail:last").should("not.have.class", "selected");

        cy.get("#main-slider .slider-arrow-left").click();

        cy.get("#main-slider .thumbnail:first").should("not.have.class", "selected");
        cy.get("#main-slider .thumbnail:last").should("have.class", "selected");

        thumbnailPictureShouldBeShown("#main-slider .thumbnail:last");
    });

    it("If right arrow is clicked, while the last thumbnail is selected, the first thumbnail is selected", () => {        
        cy.get("#main-slider .thumbnail:last").click().should("have.class", "selected");

        cy.get("#main-slider .slider-arrow-right").click();

        cy.get("#main-slider .thumbnail:first").should("have.class", "selected");
        cy.get("#main-slider .thumbnail:last").should("not.have.class", "selected");

        thumbnailPictureShouldBeShown("#main-slider .thumbnail:first");
    });

    function thumbnailPictureShouldBeShown(thumbnailSelector){
        cy.get('#main-slider .main-slider-image').then(mainSliderImage => {
            cy.get(thumbnailSelector).should('have.attr', 'data-large-image-src', mainSliderImage.attr("src"));
        });
    }
  });