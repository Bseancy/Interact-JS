 class Elevador{
            constructor(andar, andaresTotal, capacidade, pessoas){
                this.andar = andar
                this.andaresTotal = andaresTotal
                this.capacidade = capacidade
                this.pessoas = pessoas
            }
    
            entra() {
                if (this.pessoas < this.capacidade){
                    this.pessoas = this.pessoas + 1;
                    consle.log("Há ",+ this.pessoas, " no elevador.")
                } else{
                    console.log("Elevador cheio!");
                }
            }

            sai() {
                if (this.pessoas >= 1 & this.pessoas <= this.capacidade){
                   this.pessoas = this.pessoas - 1;
                   console.log("Há ",+ this.pessoas, " no elevador.") 
                } else{
                    console.log("Não há pessoas para sair do elevador.")
                }
            }

            sobe() {
                if (this.andar < this.andaresTotal){
                    this.andar = this.andar +1;
                    console.log("Você está no andar: ",+ this.andar)
                }else {
                    console.log("Você já está no último andar!")
                }
            }

            desce() {
                if ( this.andar > 0){
                    this.andar = this.andar -1;
                    console.log("Você está no andar: ",+ this.andar)
                }else {
                    console.log("Você já está no térreo!")
                }
            }
        }
    
    
        var elevador = new Elevador (0, 15, 6, 0)
