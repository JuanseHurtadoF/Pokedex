export const getTypes = (types: any) => {
    return types.map((item: any) => {
      return item.type.name
    });
  };