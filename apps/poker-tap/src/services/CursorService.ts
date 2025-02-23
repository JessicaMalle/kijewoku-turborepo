const CursorService = {
  calculateCursorCost: (currentCursors: number): number => {
    return 15 * (currentCursors + 1);
  },
};

export default CursorService;
