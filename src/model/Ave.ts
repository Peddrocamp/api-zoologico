import { Habitat } from "./Habitat"; // Importa a classe Habitat do arquivo Habitat.ts

/**
 * Classe que representa uma atração em um zoológico.
 */
export class Atracao {

    private nomeAtracao: string; // O nome da atração.
    private listaHabitats: Array<Habitat>; // A lista de habitats da atração.

    /**
     * Construtor da classe Atracao.
     * @param _nome O nome da atração.
     * @param _habitats A lista de habitats da atração.
     */
    constructor(_nome: string, _habitats: Array<Habitat>) {
        this.nomeAtracao = _nome; // Inicializa o nome da atração com o valor passado no construtor.
        this.listaHabitats = _habitats; // Inicializa a lista de habitats com o valor passado no construtor.
    }

    /**
     * Obtém o nome da atração.
     * @returns O nome da atração.
     */
    public getNomeAtracao(): string {
        return  this.nomeAtracao; // Retorna o nome da atração.
    }

    /**
     * Define o nome da atração.
     * @param _nomeAtracao O nome a ser atribuído à atração.
     */
    public setNomeHabitat(_nomeAtracao: string): void {
        this.nomeAtracao = _nomeAtracao; // Define o nome da atração com o valor passado como parâmetro.
    }

    /**
     * Obtém a lista de habitats da atração.
     * @returns A lista de habitats da atração.
     */
    public getListaHabitats(): Array<Habitat> {
        return this.listaHabitats; // Retorna a lista de habitats da atração.
    }

    /**
     * Define a lista de habitats da atração.
     * @param _habitats A lista de habitats a ser atribuída à atração.
     */
    public setListaHabitats(_habitats: Array<Habitat>): void {
        this.listaHabitats = _habitats; // Define a lista de habitats da atração com o valor passado como parâmetro.
    }
}
