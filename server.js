const http = require('http')
const port = 3000
const ip = '0.0.0.0'

const server = http.createServer((req, res) => {
	var resposta = extenso(req.url)
    obj = JSON.parse(resposta);
    console.log(obj);

	res.end(obj.Extenso)
})

server.listen(port, ip, () => {
	console.log(`Servidor rodando em http://${ip}:${port}`);
	console.log('Para derrubar o servidor, digite: ctrl + c');
})


const unidades = ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]
const teens = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
const centenas = ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]

function trio(num) {
    var numero = num.toString();
    numero = numero.padStart(3, "0");
    numero = numero.split("");
    var a = parseInt(numero[0])
    var b = parseInt(numero[1])
    var c = parseInt(numero[2])
    
    if(a == 0){
        if(b == 0){
            return unidades[c]
        } else if(b == 1){
            return teens[c]
        } else if(b >=2 && b <= 9){
            if(c == 0){
                return dezenas[b-1]
            }
            if (c >= 1 && c <= 9){
                return dezenas[b-1] +' e '+ unidades[c]
            }
        }
    }

    if(num == 100){
    	return "cem";
    }

    if(a >= 1 && a <= 9){
        if (b == 0){
            if (c == 0){
                return centenas[a];
            } else if (c > 0 && c <= 9){
                return centenas[a] + " e " + unidades[c]
            }
        } else if(b == 1){
            if (c >= 0 && c <= 9){
                return centenas[a] + " e " + teens[c]
            }
        } else if (b >= 2 && b <= 9){
            if(c == 0){
                return centenas[a] + " e " + dezenas[b-1]
            } else if(c > 0 && c <= 9)
                return centenas[a] + " e " + dezenas[b-1] + " e " + unidades[c]
        }
	}

}

function extenso(num){
	var result = ""
    var numero = num.toString();
	numero = numero.substring(1, 10)

    if(isNaN(numero)){
    	return "Parece que voce nao inseriu um numero. \nInsira um valor dentro do intevalo: [-99999, 99999]"
    } else if (numero < -99999 || numero > 99999 || numero == ""){
    	return "Insira um valor dentro do intevalo: [-99999, 99999]"
    }

    var sinal = "";
    if(numero.charAt(0) == "-"){
    	sinal = "menos ";
    	numero = numero.substring(1, 6)
    } else if(numero.charAt(0) == "+"){
    	numero = numero.substring(1, 6)
    }

    numero = numero.padStart(5, "0");
    var var1 = parseInt(numero.substring(0, 2))
    var var2 = parseInt(numero.substring(2, 5))

    if(var1 == 1 && var2 == 0){
    	result += sinal + "mil";
    } else if(var1 == 1 && var2 != 0){
    	result += sinal + "mil e " + trio(var2);
    } else if(var1 > 1 && var2 == 0){
    	result += sinal + trio(var1) + " mil";
	} else if(var1 > 1 && var2 != 0){
    	result += sinal + trio(var1) + " mil e " + trio(var2);
    } else{
    	result += sinal + trio(var2)
    }

    result = '{"Extenso": "' + result + '"}'

    return result;
}
