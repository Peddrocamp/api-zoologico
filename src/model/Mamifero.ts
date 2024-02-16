import { Animal } from "./Animal"; // Importa a classe Animal do arquivo Animal.ts

/**
 * Classe que representa um mamífero, que é um tipo de animal.
 * Estende a classe Animal.
 */
export class Mamifero extends Animal {
    private raca: string; // Declaração do atributo privado raca do tipo string.

    /**
     * Construtor da classe Mamifero.
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero); // Chama o construtor da classe pai (Animal) e passa os parâmetros necessários.
        this.raca = _raca; // Inicializa o atributo raca com o valor passado no construtor.
    }

    /**
     * Obtém a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca; // Retorna a raça do mamífero.
    }

    /**
     * Define a raça do mamífero.
     * @param raca A raça a ser atribuída ao mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca; // Define a raça do mamífero com o valor passado como parâmetro.
    }
}
