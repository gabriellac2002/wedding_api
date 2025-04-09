describe("API de Casamento - Convidados", () => {
  interface Convidado {
    id: number;
    nome: string;
    email?: string;
    confirmado: boolean;
    adultos: number;
    criancas: number;
  }

  interface Presente {
    id: number;
    nome: string;
    valor: number;
    reservado: boolean;
    pixUrl?: string;
  }

  let convidadoId: number;
  let presenteId: number;

  before(() => {
    // Limpar dados antes dos testes
    cy.task("resetDatabase");
  });

  it("POST /convidados - Deve criar um novo convidado", () => {
    const novoConvidado = {
      nome: "Carlos Santos",
      email: "carlos@example.com",
      adultos: 2,
      criancas: 1,
    };

    cy.request<Convidado>({
      method: "POST",
      url: "/convidados",
      body: novoConvidado,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.be.a("number");
      expect(response.body.nome).to.eq(novoConvidado.nome);

      convidadoId = response.body.id;
    });
  });

  it("PUT /convidados/:id/confirmacao - Deve confirmar presença", () => {
    const confirmacao = {
      confirmado: true,
      adultos: 3, // Alterando o número de adultos
      criancas: 0,
    };

    cy.request<Convidado>({
      method: "PUT",
      url: `/convidados/${convidadoId}/confirmacao`,
      body: confirmacao,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.confirmado).to.be.true;
      expect(response.body.adultos).to.eq(confirmacao.adultos);
    });
  });

  it("POST /:id/presentes - Deve adicionar presente", () => {
    const novoPresente = {
      nome: "Jogo de Talheres",
      valor: 180.5,
      descricao: "Talheres inox 24 peças",
    };

    cy.request<Presente>({
      method: "POST",
      url: `/convidados/${convidadoId}/presentes`,
      body: novoPresente,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.nome).to.eq(novoPresente.nome);

      presenteId = response.body.id;
    });
  });

  it("POST /presentes/:id/reservar - Deve reservar presente", () => {
    cy.request<Presente>({
      method: "POST",
      url: `/presentes/${presenteId}/reservar`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.reservado).to.be.true;
      expect(response.body.pixUrl).to.be.a("string");
    });
  });
});
