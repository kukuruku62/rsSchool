// import { Component } from "react";

export class SearchData {
  _apiBase: string = 'https://pokeapi.co/api/v2/';

  getDataFromResource = async (url: string) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllItems = () => {
    return this.getDataFromResource(`${this._apiBase}pokemon/`);
  };

  getItemById = (id: string) => {
    return this.getDataFromResource(`${this._apiBase}/pokemon/${id}`);
  };
}
