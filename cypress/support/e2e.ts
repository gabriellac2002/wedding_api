// Extendendo o Cypress com comandos personalizados
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      criarConvidado(dados: {
        nome: string;
        email?: string;
        adultos?: number;
        criancas?: number;
      }): Chainable<{
        id: number;
        nome: string;
        confirmado: boolean;
      }>;
    }
  }
}

Cypress.Commands.add("criarConvidado", (dados) => {
  return cy.request("POST", "/convidados", dados).then((response) => {
    return response.body;
  });
});
