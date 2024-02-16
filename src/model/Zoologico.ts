import { Atracao } from "./Atracao"; // Importa a classe Atracao do arquivo Atracao.ts

/**
 * Classe que representa um zoológico.
 */
export class Zoologico {
    private nome: string; // O nome do zoológico.
    private lista_de_atracoes: Array<Atracao>; // A lista de atrações do zoológico.

    /**
     * Construtor da classe Zoologico.
     * @param _nome O nome do zoológico.
     * @param _lista_de_atracoes A lista de atrações do zoológico.
     */
    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>){
        this.nome = _nome; // Inicializa o nome do zoológico com o valor passado no construtor.
        this.lista_de_atracoes = _lista_de_atracoes; // Inicializa a lista de atrações com o valor passado no construtor.
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param nome O nome a ser atribuído ao zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome; // Define o nome do zoológico com o valor passado como parâmetro.
    }

    /**
     * Obtém o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome; // Retorna o nome do zoológico.
    }

    /**
     * Define a lista de atrações do zoológico.
     * 
     * @param lista_de_atracoes A lista de atrações a ser atribuída ao zoológico.
     */
    public setLista_de_atrações(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes; // Define a lista de atrações do zoológico com o valor passado como parâmetro.
    }

    /**
     * Obtém a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getLista_de_atrações(): Array<Atracao> {
        return this.lista_de_atracoes; // Retorna a lista de atrações do zoológico.
    }
}

