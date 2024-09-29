import { Express } from "express";
import { Server as HTTPServer } from "http";

export const ExpressRouterSymbol = Symbol("__ExpressRouter__");
export type ExpressRouterSymbolVal = { app: Express; server: HTTPServer };
export const ExpressRouterPathSymbol = Symbol("__ExpressRouterPath__");
export type ExpressRouterPathSymbolVal = string;
