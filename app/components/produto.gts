import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import Component from '@glimmer/component';

export interface ProdutoSignature {
  // The arguments accepted by the component
  Args: {
    produto: { id: number; name: string; quantidade: number };
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Produto extends Component<ProdutoSignature> {
  handleClick(produto: { id: number; name: string; quantidade: number }) {
    alert(`Produto clicked: ${produto.name}`);
  }

  get isAvailable() {
    return this.args.produto.quantidade > 0;
  }

  <template>
    <li>
      <h2>{{@produto.name}}</h2>
      <button type="button" {{on "click" (fn this.handleClick @produto)}}>
        Click me
      </button>
      {{#if this.isAvailable}}
        <p> Tem o produto :)</p>
      {{else}}
        <p> Não tem o produto :/</p>
      {{/if}}

    </li>
  </template>
}
