export interface Hobby {
  _id: string;
  name: string;
  passionLevel: 'Low' | 'Medium' | 'High' | 'Very High';
  year: Date;
}
