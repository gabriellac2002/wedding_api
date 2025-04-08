import { z } from "zod";

// Schemas de validação Zod
export const ConvidadoInputSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }).optional(),
  telefone: z
    .string()
    .min(10, { message: "Telefone deve ter pelo menos 10 dígitos" })
    .max(15, { message: "Telefone deve ter no máximo 15 dígitos" })
    .optional(),
  adultos: z
    .number()
    .int({ message: "Número de adultos deve ser inteiro" })
    .positive({ message: "Deve haver pelo menos 1 adulto" })
    .default(1),
  criancas: z
    .number()
    .int({ message: "Número de crianças deve ser inteiro" })
    .nonnegative({ message: "Número de crianças não pode ser negativo" })
    .default(0),
  mensagem: z.string().optional(),
});

export const ConvidadoResponseSchema = ConvidadoInputSchema.extend({
  id: z.number(),
  confirmado: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export const ConfirmacaoInputSchema = z.object({
  confirmado: z.boolean(),
  adultos: z
    .number()
    .int({ message: "Número de adultos deve ser inteiro" })
    .positive({ message: "Deve haver pelo menos 1 adulto" }),
  criancas: z
    .number()
    .int({ message: "Número de crianças deve ser inteiro" })
    .nonnegative({ message: "Número de crianças não pode ser negativo" }),
  mensagem: z.string().optional(),
});

export const PresenteInputSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome do presente deve ter pelo menos 3 caracteres" }),
  descricao: z.string().optional(),
  valor: z.number().positive({ message: "Valor deve ser positivo" }),
  link: z.string().url({ message: "URL inválida" }).optional(),
  imagem: z.string().url({ message: "URL de imagem inválida" }).optional(),
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

export const ReservaPresenteInputSchema = z.object({
  convidadoId: z.number(),
  metodoPagamento: z.enum(["PIX", "DINHEIRO"]).default("PIX"),
});

// Tipos TypeScript inferidos dos Schemas
export type ConvidadoInput = z.infer<typeof ConvidadoInputSchema>;
export type ConvidadoResponse = z.infer<typeof ConvidadoResponseSchema>;
export type ConfirmacaoInput = z.infer<typeof ConfirmacaoInputSchema>;
export type PresenteInput = z.infer<typeof PresenteInputSchema>;
export type PresenteResponse = z.infer<typeof PresenteResponseSchema>;
export type ReservaPresenteInput = z.infer<typeof ReservaPresenteInputSchema>;

// Array para documentação Swagger/OpenAPI
export const convidadoSchemas = [
  { schema: ConvidadoInputSchema, name: "ConvidadoInput" },
  { schema: ConvidadoResponseSchema, name: "ConvidadoResponse" },
  { schema: ConfirmacaoInputSchema, name: "ConfirmacaoInput" },
  { schema: PresenteInputSchema, name: "PresenteInput" },
  { schema: PresenteResponseSchema, name: "PresenteResponse" },
  { schema: ReservaPresenteInputSchema, name: "ReservaPresenteInput" },
];
