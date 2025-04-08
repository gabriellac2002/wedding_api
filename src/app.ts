import fastify from "fastify";
import { withRefResolver } from "fastify-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { convidadoSchemas } from "./routes/convidados.schema";
import { convidadoRoutes } from "./routes/convidados.route";

const server = fastify({
  logger: true,
});

// Registrar schemas para documentação
for (const schema of [...convidadoSchemas]) {
  server.addSchema(schema);
}

// Configuração do Swagger
server.register(
  fastifySwagger,
  withRefResolver({
    openapi: {
      info: {
        title: "API Casamento",
        description:
          "API para gerenciamento de convidados e lista de presentes de casamento",
        version: "1.0.0",
      },
      tags: [
        {
          name: "Convidado",
          description: "Operações relacionadas a convidados",
        },
        {
          name: "Presente",
          description: "Operações relacionadas a lista de presentes",
        },
        {
          name: "PIX",
          description: "Operações relacionadas a pagamentos via PIX",
        },
      ],
    },
  })
);

server.register(fastifySwaggerUi, {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
});

// Registrar rotas
server.register(convidadoRoutes, { prefix: "/api/convidados" });

const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server listening on http://localhost:3000`);
    console.log(`Documentation available on http://localhost:3000/docs`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
