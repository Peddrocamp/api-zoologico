import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

/**
 * Classe que representa um habitat no zoológico.
 */
export class Habitat {
    private nome: string; // O nome do habitat.
    private lista_de_animais: Animal; // A lista de animais que habitam o habitat.

    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais que habitam o habitat.
     */
    constructor(_nome: string, _lista_de_animais: Animal){
        this.nome = _nome; // Inicializa o nome do habitat com o valor passado no construtor.
        this.lista_de_animais = _lista_de_animais; // Inicializa a lista de animais com o valor passado no construtor.
    }

    /**
     * Define o nome do habitat.
     * 
     * @param nome O nome a ser atribuído ao habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome; // Define o nome do habitat com o valor passado como parâmetro.
    }

    /**
     * Obtém o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome; // Retorna o nome do habitat.
    }

    /**
     * Define a lista de animais que habitam o habitat.
     * 
     * @param lista_de_animais A lista de animais a ser atribuída ao habitat.
     */
    public setLista_de_Animais(lista_de_animais: Animal): void {
        this.lista_de_animais = lista_de_animais; // Define a lista de animais com o valor passado como parâmetro.
    }

    /**
     * Obtém a lista de animais que habitam o habitat.
     * 
     * @returns A lista de animais que habitam o habitat.
     */
    public getLista_de_Animais(): Animal {
        return this.lista_de_animais; // Retorna a lista de animais que habitam o habitat.
    }
}
