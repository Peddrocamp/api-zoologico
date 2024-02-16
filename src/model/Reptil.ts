import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

/**
 * Classe que representa um réptil, que é um tipo de animal.
 * Estende a classe Animal.
 */
export class Reptil extends Animal {
    private escama: string; // Declaração do atributo privado escama do tipo string.

    /**
     * Construtor da classe Reptil.
     * @param _escama O tipo de escama do réptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     */
    constructor(_escama: string, _nome: string, _idade: number, _genero: string ) {
        super(_nome, _idade, _genero); // Chama o construtor da classe pai (Animal) e passa os parâmetros necessários.
        this.escama = _escama; // Inicializa o atributo escama com o valor passado no construtor.
    }

    /**
     * Obtém o tipo de escama do réptil.
     * @returns O tipo de escama do réptil.
     */
    public getEscama(): string {
        return this.escama; // Retorna o tipo de escama do réptil.
    }

    /**
     * Define o tipo de escama do réptil.
     * @param _escama O tipo de escama a ser atribuído ao réptil.
     */
    public setEscama(_escama: string): void {
        this.escama = _escama; // Define o tipo de escama do réptil com o valor passado como parâmetro.
    }
}
