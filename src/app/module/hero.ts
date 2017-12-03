/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


export class Hero {
  // private id?: number;
  // private name?: string;

  constructor(private _id?: number, private _name?: string) { }

  set id(value) {
    if (value < 0) {
      throw new Error('value cannot be less than 0.');
    }
    this._id = value;
  }

  get id() {
    return this._id;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;

  }

}
