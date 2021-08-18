// Nodes Model

import { Model } from '@vuex-orm/core';

export default class Nodes extends Model {
  // This is the name used as module name of the Vuex Store.
  static entity = 'nodes';

  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      nodes: this.attr([]),
      connectedNodes: this.attr([]),
      connectedIds: this.attr([])
    }
  }
}