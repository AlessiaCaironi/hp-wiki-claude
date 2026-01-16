import { Character, Spell, House, Book } from '../types';

// Base API URL - update this to match the actual API endpoint
const API_BASE_URL = 'https://hp-api.onrender.com/api';

/**
 * Service class for interacting with the Harry Potter API
 */
class HarryPotterAPI {
  private async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  // Characters
  async getAllCharacters(): Promise<Character[]> {
    return this.fetchData<Character[]>('/characters');
  }

  async getCharacterById(id: string): Promise<Character> {
    return this.fetchData<Character>(`/characters/${id}`);
  }

  async getStudents(): Promise<Character[]> {
    return this.fetchData<Character[]>('/characters/students');
  }

  async getStaff(): Promise<Character[]> {
    return this.fetchData<Character[]>('/characters/staff');
  }

  async getCharactersByHouse(house: string): Promise<Character[]> {
    return this.fetchData<Character[]>(`/characters/house/${house.toLowerCase()}`);
  }

  // Spells
  async getAllSpells(): Promise<Spell[]> {
    // Note: The HP API might not have spells endpoint,
    // this is a placeholder for when the actual API is integrated
    return this.fetchData<Spell[]>('/spells');
  }

  async getSpellById(id: string): Promise<Spell> {
    return this.fetchData<Spell>(`/spells/${id}`);
  }

  // Houses (mock data for now as the API might not have this endpoint)
  async getHouses(): Promise<House[]> {
    // Mock data - replace with actual API call when available
    return Promise.resolve([
      {
        id: '1',
        name: 'Gryffindor',
        founder: 'Godric Gryffindor',
        animal: 'Lion',
        colors: ['Scarlet', 'Gold'],
        element: 'Fire',
        ghost: 'Nearly Headless Nick',
        commonRoom: 'Gryffindor Tower',
        heads: ['Minerva McGonagall'],
        traits: ['Courage', 'Bravery', 'Nerve', 'Chivalry'],
      },
      {
        id: '2',
        name: 'Hufflepuff',
        founder: 'Helga Hufflepuff',
        animal: 'Badger',
        colors: ['Yellow', 'Black'],
        element: 'Earth',
        ghost: 'The Fat Friar',
        commonRoom: 'Hufflepuff Basement',
        heads: ['Pomona Sprout'],
        traits: ['Hard Work', 'Patience', 'Justice', 'Loyalty'],
      },
      {
        id: '3',
        name: 'Ravenclaw',
        founder: 'Rowena Ravenclaw',
        animal: 'Eagle',
        colors: ['Blue', 'Bronze'],
        element: 'Air',
        ghost: 'The Grey Lady',
        commonRoom: 'Ravenclaw Tower',
        heads: ['Filius Flitwick'],
        traits: ['Intelligence', 'Creativity', 'Learning', 'Wit'],
      },
      {
        id: '4',
        name: 'Slytherin',
        founder: 'Salazar Slytherin',
        animal: 'Serpent',
        colors: ['Green', 'Silver'],
        element: 'Water',
        ghost: 'The Bloody Baron',
        commonRoom: 'Slytherin Dungeon',
        heads: ['Severus Snape', 'Horace Slughorn'],
        traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
      },
    ]);
  }

  async getHouseById(id: string): Promise<House> {
    const houses = await this.getHouses();
    const house = houses.find(h => h.id === id);
    if (!house) {
      throw new Error(`House with id ${id} not found`);
    }
    return house;
  }

  // Books (mock data for now)
  async getBooks(): Promise<Book[]> {
    // Mock data - replace with actual API call when available
    return Promise.resolve([
      {
        id: '1',
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J.K. Rowling',
        releaseDate: '1997-06-26',
        pages: 223,
        description: 'The first book in the Harry Potter series.',
      },
      {
        id: '2',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        releaseDate: '1998-07-02',
        pages: 251,
        description: 'The second book in the Harry Potter series.',
      },
      // Add more books as needed
    ]);
  }
}

export const api = new HarryPotterAPI();
