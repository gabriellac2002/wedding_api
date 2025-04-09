import { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import {
  $ref,
  ConvidadoInputSchema,
  PresenteInputSchema,
  ParamsWithIdSchema,
  ConfirmacaoInput,
} from "./convidados.schema";
import { convidadoService } from "../services/convidados";

export const convidadoRoutes: FastifyPluginAsync = async (server) => {
  // Criação de convidado
  server.post(
    "/criar",
    {
      schema: {
        tags: ["Convidado"],
        body: $ref("ConvidadoInputSchema"),
        response: {
          201: $ref("ConvidadoResponseSchema"),
        },
      },
    },
    async (request, reply) => {
      const body = request.body as z.infer<typeof ConvidadoInputSchema>;
      const convidado = await convidadoService.criarConvidado(body);
      return reply.code(201).send(convidado);
    }
  );

  // Confirmação de presença
  server.put(
    "/:id/confirmacao",
    {
      schema: {
        tags: ["Convidado"],
        params: $ref("ParamsWithIdSchema"),
        body: $ref("ConfirmacaoInputSchema"),
        response: {
          200: {
            type: "object",
            properties: {
              message: { type: "string" },
              convidadoId: { type: "number" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params as z.infer<typeof ParamsWithIdSchema>;
      const data = request.body as ConfirmacaoInput;

      // Atualização no banco
      console.log("Confirmando convidado:", id, data);

      return reply.send({
        message: "Convidado confirmado com sucesso",
        convidadoId: id,
      });
    }
  );

  // Adicionar presente
  server.post(
    "/:id/presentes",
    {
      schema: {
        tags: ["Presente"],
        params: $ref("ParamsWithIdSchema"),
        body: $ref("PresenteInputSchema"),
        response: {
          201: $ref("PresenteResponseSchema"),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params as z.infer<typeof ParamsWithIdSchema>;
      const presente = await convidadoService.adicionarPresente(
        id,
        request.body as z.infer<typeof PresenteInputSchema>
      );
      return reply.code(201).send(presente);
    }
  );

  // Reservar presente
  server.post(
    "/presentes/:id/reservar",
    {
      schema: {
        tags: ["Presente", "PIX"],
        params: $ref("ParamsWithIdSchema"),
        response: {
          200: $ref("PresenteResponseSchema"),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params as z.infer<typeof ParamsWithIdSchema>;
      const presente = await convidadoService.reservarPresente(id);
      return reply.send(presente);
    }
  );
};
