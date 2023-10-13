interface Fruit extends Record<string, any> {
  name: string;
  id: number;
  family: string;
  order: string;
  genus: string;
  nutritions: {
    calories: number;
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
}

export type { Fruit };
