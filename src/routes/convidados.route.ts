import { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import {
  ConvidadoInputSchema, // Alterado para usar o Schema
  ConvidadoResponseSchema,
  ConfirmacaoInputSchema,
  PresenteInputSchema,
  PresenteResponseSchema,
} from "./convidados.schema";
import { convidadoService } from "../services/convidados";

export const convidadoRoutes: FastifyPluginAsync = async (server) => {
  // Rota para criar um novo convidado
  server.post(
    "/",
    {
      schema: {
        tags: ["Convidado"], // Tag para documentação
        body: ConvidadoInputSchema, // Validação do corpo da requisição usando o Schema
        response: {
          201: ConvidadoResponseSchema, // Validação da resposta usando o Schema
        },
      },
    },
    async (request, reply) => {
      // Obtém o corpo da requisição e valida com o Schema
      const body = request.body as z.infer<typeof ConvidadoInputSchema>;
      // Chama o serviço para criar um convidado
      const convidado = await convidadoService.criarConvidado(body);
      // Retorna o convidado criado com status 201
      return reply.code(201).send(convidado);
    }
  );

  // Rota para confirmar a presença de um convidado
  server.put(
    "/:id/confirmacao",
    {
      schema: {
        tags: ["Convidado"], // Tag para documentação
        params: z.object({ id: z.number() }), // Validação dos parâmetros da rota
        body: ConfirmacaoInputSchema, // Validação do corpo da requisição usando o Schema
        response: {
          200: ConvidadoResponseSchema, // Validação da resposta usando o Schema
        },
      },
    },
    async (request, reply) => {
      // Obtém o ID dos parâmetros da rota
      const { id } = request.params as { id: number };
      // Obtém o corpo da requisição e valida com o Schema
      const body = request.body as z.infer<typeof ConfirmacaoInputSchema>;
      // Chama o serviço para confirmar a presença do convidado
      const convidado = await convidadoService.confirmarPresenca(id, body);
      // Retorna o convidado atualizado
      return reply.send(convidado);
    }
  );

  // Rota para adicionar um presente para um convidado
  server.post(
    "/:id/presentes",
    {
      schema: {
        tags: ["Presente"], // Tag para documentação
        params: z.object({ id: z.number() }), // Validação dos parâmetros da rota
        body: PresenteInputSchema, // Validação do corpo da requisição usando o Schema
        response: {
          201: PresenteResponseSchema, // Validação da resposta usando o Schema
        },
      },
    },
    async (request, reply) => {
      // Obtém o ID dos parâmetros da rota
      const { id } = request.params as { id: number };
      // Chama o serviço para adicionar um presente ao convidado
      const presente = await convidadoService.adicionarPresente(
        id,
        request.body as z.infer<typeof PresenteInputSchema>
      );
      // Retorna o presente criado com status 201
      return reply.code(201).send(presente);
    }
  );

  // Rota para reservar um presente
  server.post(
    "/presentes/:id/reservar",
    {
      schema: {
        tags: ["Presente", "PIX"], // Tags para documentação
        params: z.object({ id: z.number() }), // Validação dos parâmetros da rota
        response: {
          200: PresenteResponseSchema, // Validação da resposta usando o Schema
        },
      },
    },
    async (request, reply) => {
      // Obtém o ID dos parâmetros da rota
      const { id } = request.params as { id: number };
      // Chama o serviço para reservar o presente
      const presente = await convidadoService.reservarPresente(id);
      // Retorna o presente reservado
      return reply.send(presente);
    }
  );
};
