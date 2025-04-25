import Route from '@ember/routing/route';

export default class PadocaRoute extends Route {
  model() {
    return [
      { id: 1, name: 'Pão de Queijo', quantidade: 20 },
      { id: 2, name: 'Bolo de Cenoura', quantidade: 10 },
      { id: 3, name: 'Cafezinho', quantidade: 0 },
    ];
  }
}
