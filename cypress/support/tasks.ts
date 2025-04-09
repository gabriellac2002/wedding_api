import { PrismaClient } from "@prisma/client";
import { defineConfig } from "cypress";

const prisma = new PrismaClient();

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on("task", {
        async resetDatabase() {
          await prisma.presente.deleteMany();
          await prisma.convidado.deleteMany();
          return null;
        },
        async createConvidado(convidadoData: {
          nome: string;
          adultos?: number;
          criancas?: number;
        }) {
          return await prisma.convidado.create({ data: convidadoData });
        },
      });
    },
  },
});
