import { prisma } from "../prisma/client";

import {
  type ConvidadoInput,
  type ConfirmacaoInput,
  type PresenteInput,
} from "../routes/convidados.schema";

export const convidadoService = {
  // Função para criar um novo convidado no banco de dados
  async criarConvidado(input: ConvidadoInput) {
    return prisma.convidado.create({
      data: input, // Os dados do convidado são passados como entrada
    });
  },

  // Função para confirmar a presença de um convidado
  async confirmarPresenca(id: number, input: ConfirmacaoInput) {
    return prisma.convidado.update({
      where: { id }, // Localiza o convidado pelo ID
      data: {
        confirmado: input.confirmado, // Atualiza o status de confirmação
        adultos: input.adultos, // Atualiza o número de adultos
        criancas: input.criancas, // Atualiza o número de crianças
        mensagem: input.mensagem, // Atualiza a mensagem do convidado
      },
    });
  },

  // Função para adicionar um presente associado a um convidado
  async adicionarPresente(convidadoId: number, input: PresenteInput) {
    return prisma.presente.create({
      data: {
        ...input, // Dados do presente
        convidadoId, // Relaciona o presente ao ID do convidado
      },
    });
  },

  // Função para reservar um presente
  async reservarPresente(presenteId: number) {
    // Busca o presente pelo ID
    const presente = await prisma.presente.findUnique({
      where: { id: presenteId },
    });

    // Verifica se o presente existe
    if (!presente) throw new Error("Presente não encontrado");
    // Verifica se o presente já foi reservado
    if (presente.reservado) throw new Error("Presente já reservado");

    // Gerar dados do PIX (comentado no momento)
    // const pixData = await gerarPix({
    //   valor: presente.valor,
    //   descricao: `Presente: ${presente.nome}`,
    // });

    // Atualiza o status do presente para reservado
    return prisma.presente.update({
      where: { id: presenteId },
      data: {
        reservado: true, // Marca o presente como reservado
        // pixCode: pixData.codigo, // Código do PIX (comentado)
        // pixUrl: pixData.url, // URL do PIX (comentado)
        // qrCode: pixData.qrCode, // QR Code do PIX (comentado)
      },
    });
  },
};
