// Utils
import { basicFetch } from "../../utils/basicFetch";

// Types
import type { Movies } from "@types";
import type { NextApiRequest, NextApiResponse } from "next";

jest.mock("../../utils/basicFetch", () => ({
  basicFetch: jest.fn(),
}));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies | { error: string }>
) {
  const { page, search } = req.query;

  const endpoint = search
    ? `https://api.example.com/search?query=${search}&page=${page}`
    : `https://api.example.com/popular?page=${page}`;

  try {
    const data = await basicFetch<Movies>(endpoint);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}

describe("handler", () => {
  it("should call basicFetch with the correct endpoint for search query", async () => {
    const mockRequest = {
      query: {
        page: "1",
        search: "example",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockData = { results: [] };

    (basicFetch as jest.Mock).mockResolvedValueOnce(mockData);

    await handler(mockRequest as any, mockResponse as any);

    expect(basicFetch).toHaveBeenCalledWith(
      "https://api.example.com/search?query=example&page=1"
    );
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockData);
  });

  it("should call basicFetch with the correct endpoint for popular movies", async () => {
    const mockRequest = {
      query: {
        page: "1",
        search: "",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockData = { results: [] };

    (basicFetch as jest.Mock).mockResolvedValueOnce(mockData);

    await handler(mockRequest as any, mockResponse as any);

    expect(basicFetch).toHaveBeenCalledWith(
      "https://api.example.com/popular?page=1"
    );
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(mockData);
  });

  it("should handle errors and respond with an error status code", async () => {
    const mockRequest = {
      query: {
        page: "1",
        search: "example",
      },
    };

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockError = new Error("Something went wrong");

    (basicFetch as jest.Mock).mockRejectedValueOnce(mockError);

    await handler(mockRequest as any, mockResponse as any);

    expect(basicFetch).toHaveBeenCalledWith(
      "https://api.example.com/search?query=example&page=1"
    );
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Something went wrong",
    });
  });
});
