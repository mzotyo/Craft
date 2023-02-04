export type ResponseModel = string | Error;

export type OutputBoundary = (result: ResponseModel) => void;
