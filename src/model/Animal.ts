/**
 * Classe Animal representa entidades animais com atributos como nome, idade e gênero.
 */
export class Animal {
    
    /**
     * O nome do animal.
     */
    private nome: string;

    /**
     * A idade do animal.
     */
    private idade: number;

    /**
     * O gênero do animal.
     */
    private genero: string;

    /**
     * Construtor da classe Animal.
     * 
     * @param _nome O nome do animal.
     * @param _Idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string,
                _Idade: number,
                _genero: string) {
        this.nome = _nome;
        this.idade = _Idade;
        this.genero = _genero;
    }

    /**
     * Retorna o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do animal.
     * 
     * @param _nome O nome a ser atribuído ao animal.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Define a idade do animal.
     * 
     * @param _idade A idade a ser atribuída ao animal.
     */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    /**
     * Retorna o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }

    /**
     * Define o gênero do animal.
     * 
     * @param _genero O gênero a ser atribuído ao animal.
     */
    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
}
