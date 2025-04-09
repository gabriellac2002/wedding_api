import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

/* ----------------------- Convidado ----------------------- */

export const ConvidadoInputSchema = z
  .object({
    nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido").optional(),
    telefone: z
      .string()
      .min(10, "Telefone deve ter pelo menos 10 dígitos")
      .max(15, "Telefone deve ter no máximo 15 dígitos")
      .optional(),
    adultos: z
      .number()
      .int("Número de adultos deve ser inteiro")
      .min(1, "Deve haver pelo menos 1 adulto")
      .default(1),
    criancas: z
      .number()
      .int("Número de crianças deve ser inteiro")
      .min(0, "Número de crianças não pode ser negativo")
      .default(0),
    mensagem: z.string().optional(),
  })
  .strict();

export const ConvidadoResponseSchema = ConvidadoInputSchema.extend({
  id: z.number(),
  confirmado: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

/* -------------------- Confirmação ----------------------- */

export const ConfirmacaoInputSchema = z
  .object({
    confirmado: z.boolean(),
    adultos: z
      .number()
      .int("Número de adultos deve ser inteiro")
      .min(1, "Deve haver pelo menos 1 adulto"),
    criancas: z
      .number()
      .int("Número de crianças deve ser inteiro")
      .min(0, "Número de crianças não pode ser negativo"),
    mensagem: z.string().optional(),
  })
  .strict();

/* ----------------------- Presente ----------------------- */

export const PresenteInputSchema = z.object({
  nome: z.string().min(3, "Nome do presente deve ter pelo menos 3 caracteres"),
  descricao: z.string().optional(),
  valor: z.number().min(0.01, "Valor deve ser maior que zero"),
  link: z.string().url("URL inválida").optional(),
  imagem: z.string().url("URL de imagem inválida").optional(),
});

export const PresenteResponseSchema = PresenteInputSchema.extend({
  id: z.number(),
  reservado: z.boolean(),
  reservadoPor: z.string().optional(),
  metodoPagamento: z.enum(["PIX", "DINHEIRO"]).optional(),
  pixCode: z.string().optional(),
  pixUrl: z.string().optional(),
  qrCode: z.string().optional(),
  pago: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

/* --------------------- Reserva de Presente --------------------- */

export const ReservaPresenteInputSchema = z.object({
  convidadoId: z.number(),
  metodoPagamento: z.enum(["PIX", "DINHEIRO"]).default("PIX"),
});

/* ----------------------- Params ----------------------- */

export const ParamsWithIdSchema = z.object({
  id: z.number(),
});

/* ----------------------- Tipagens ----------------------- */

export type ConvidadoInput = z.infer<typeof ConvidadoInputSchema>;
export type ConvidadoResponse = z.infer<typeof ConvidadoResponseSchema>;
export type ConfirmacaoInput = z.infer<typeof ConfirmacaoInputSchema>;
export type PresenteInput = z.infer<typeof PresenteInputSchema>;
export type PresenteResponse = z.infer<typeof PresenteResponseSchema>;
export type ReservaPresenteInput = z.infer<typeof ReservaPresenteInputSchema>;

/* -------------------- Exportação JSON Schema -------------------- */

export const { schemas: convidadoSchemas, $ref } = buildJsonSchemas(
  {
    ConvidadoInputSchema,
    ConvidadoResponseSchema,
    ConfirmacaoInputSchema,
    PresenteInputSchema,
    PresenteResponseSchema,
    ReservaPresenteInputSchema,
    ParamsWithIdSchema,
  },
  {
    $id: "Schemas",
    target: "jsonSchema7",
  }
);
