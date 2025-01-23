import { FastifyReply, FastifyRequest } from "fastify";

export async function checkSessionIdExists(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const sessionId = request.cookies.sessionId;
  if (!sessionId) {
    reply.code(401).send({
      message: "Unauthorized.",
      error: true,
      success: false,
    });
  }
}
