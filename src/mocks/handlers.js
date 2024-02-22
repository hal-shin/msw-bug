import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("http://localhost:8080/api/v1/healthcheck", () => {
    return HttpResponse.json({
      status: "ok",
    });
  }),
];
