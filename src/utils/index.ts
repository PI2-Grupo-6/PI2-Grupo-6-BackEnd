export const compareObjectsWithSimilarKeys = (obj1: { [x: string]: any; }, obj2: { [x: string]: any; }): boolean => {
    const keys = Object.keys(obj1).filter({}.hasOwnProperty.bind(obj2));
    return keys.every(key => 
      obj1[key] === obj2[key]
    )
};
