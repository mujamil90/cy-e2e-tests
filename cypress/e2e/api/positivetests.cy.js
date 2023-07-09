
describe('verify PurgoMalum Api with positive test cases', () => {

    before( function () {
        cy.fixture('api_requests').then(function(userdata)  {
            this.userdata = userdata
        
        })
        
      });

   /*{
        "text": "Deutsch Eck is in koblenz"
      } */
      context('GET /read - status code check', () => {
        it('verify https status code for PurgoMalum Api', function () {
            cy.request({
                method:'GET', 
                url: Cypress.config().baseUrlApi + '/service/json', 
                qs: this.userdata.api_requests[0]
            })
                .should((response) => {
                  //  cy.log(JSON.stringify(response.body))
                    expect(response.status).to.eq(200)
                });
        });
    });

    /* {
        "text": "Deutsch Eck is in koblenz",
        "add" : "koblenz"
      } */

    context('GET / read - default value of FILL-TEXT check', () => {
        it('should return a text with replacement of asterik as default of FILL_TEXT parameter for matching text of ADD parameter',  function() {
          cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/json',
            qs: this.userdata.api_requests[1]
        })
            .should((response) => {
               // cy.log(JSON.stringify(response.body))
                expect(response.body.result).to.eq('Deutsch Eck is in *******')
            });
        });
});

/* {
    "text": "Deutsch Eck is in koblenz",
    "add" : "koblenz",
    "fill_text": "berlin"
  } */
context('GET /read - provided value of FILL-TEXT check', () => {
    it('should return a text with replacement of FILL_TEXT parameter for matching text of provided  ADD parameter', function() {
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/json',
            qs: this.userdata.api_requests[2]
        })
            .should((response) => {
              //  cy.log(JSON.stringify(response.body))
               expect(response.body.result).to.eq('Deutsch Eck is in berlin')
            });
    });
});

/* {
    "text": "Deutsch Eck is in koblenz",
    "add" : "koblenz",
    "fill_char": ""
  } */
context('GET /read - default value of FILL-CHAR check', () => {
    it('should return a text with replacement of asterik as default of FILL_CHAR parameter for matching text of ADD parameter', function()  {
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/json',
            qs: this.userdata.api_requests[3]
        })
            .should((response) => {
                
                expect(response.body.result).to.eq('Deutsch Eck is in *******')
            });
    });
});

/* {
    "text": "Deutsch Eck is in koblenz",
    "add" : "koblenz",
    "fill_char": "="
  } */
context('GET /read - provided value of FILL-CHAR check', () => {
    it('should return a text with replacement of FILL_CHAR parameter for matching text of provided  ADD parameter', function() {
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/json',
            qs: this.userdata.api_requests[4]
        })
            .should((response) => {
                expect(response.body.result).to.eq('Deutsch Eck is in =======')
            });
    });
});

/* {
    "text": "Deutsch Eck is in koblenz",
    "add" : "koblenz",
    "fill_text" : "=",
    "fill_char":"~"
    } */
context('GET /read - Json schema check', () => {
    it('should return the correct json format in response for json schema validation', function() {

        const schema ={"result":"Deutsch Eck is in ="}
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/json',
            qs: this.userdata.api_requests[5]
        })
            .should((response) => {
              //  cy.log(JSON.stringify(response.body))
               expect(response.body).to.be.jsonSchema(schema);
            });
    });
});

/* {
    "text": "Deutsch Eck is in koblenz"
  } */
context('GET /read - check for Plain text', () => {
    it('should return response in plain text if providing content type as PLAIN text', function() {
        cy.request({
            method: 'GET',
            url: Cypress.config().baseUrlApi + '/service/plain',
            qs: this.userdata.api_requests[0]
        })
            .should((response) => {
                expect(response.body).to.eq('Deutsch Eck is in koblenz')
            });
    });
});
});