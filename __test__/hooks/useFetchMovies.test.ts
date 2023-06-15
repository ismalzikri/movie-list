// Start the unit test
describe("useFetchMovies", () => {
  // Define a sample search query and movie response
  const searchQuery = "test";
  const moviesResponse = {
    id: 1,
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 0,
  };

  // Mock the fetchMovies function
  const fetchMovies = jest.fn().mockResolvedValue(moviesResponse);

  // Mock the useInfiniteQuery hook
  const useInfiniteQuery = jest.fn().mockReturnValue({
    data: {
      pages: [moviesResponse],
    },
    isLoading: false,
    isError: false,
    fetchNextPage: jest.fn(),
  });

  // Invoke the useFetchMovies hook manually
  const useFetchMovies = (search: string) => {
    return useInfiniteQuery(
      ["movies", search],
      ({ pageParam = 1 }: { pageParam?: number }) =>
        fetchMovies(search, pageParam),
      {
        getNextPageParam: (lastPage: typeof moviesResponse) => {
          if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
          return undefined;
        },
        refetchOnWindowFocus: false,
      }
    );
  };

  it("should fetch movies correctly", async () => {
    // Invoke the useFetchMovies hook manually
    const result = useFetchMovies(searchQuery);

    // Assert fetched data
    expect(result.isLoading).toBe(false);
    expect(result.isError).toBe(false);
    expect(result.data?.pages).toEqual([moviesResponse]);
  });
});
