export const getStats = (stats: any) => {
  return stats.map((item: any) => {
    return {
      name: item.stat.name,
      value: item.base_stat,
    };
  });
};
