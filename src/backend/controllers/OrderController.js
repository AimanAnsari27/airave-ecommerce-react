import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";
/**
 * All the routes related to Category are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all categories in the db.
 * send GET Request at /api/categories
 * */

export const getOrderHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrder = schema.users.findBy({ _id: userId }).order;
  return new Response(200, {}, { order: userOrder });
};

export const addOrderHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userOrder = schema.users.findBy({ _id: userId }).order;
    const { order } = JSON.parse(request.requestBody);
    userOrder.push({
      _id: uuid(),
      ...order,
    });
    this.db.users.update({ _id: userId }, { order: userOrder });
    return new Response(201, {}, { order: userOrder });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
