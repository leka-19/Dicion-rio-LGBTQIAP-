function carregaDicionario(){
    var biografias = { bio01:{
        nome: "Lésbicas",
        imagem: "https://static.vecteezy.com/ti/vetor-gratis/p3/2753356-papel-de-parede-de-fundo-de-bandeira-lesbica-vetor.jpg",
        descricao: "São mulheres que sentem atração sexual/romântica por outras mulheres (ou seja, pelo mesmo gênero).",
        citacao:"Eu não sou livre enquanto alguma mulher não o for, mesmo quando as correntes dela forem muito diferentes das minhas (Audre Lorde - Poeta, Escitora, ativita, mulher negra e Lébsica)" 
},

bio02:{
    nome: "Gays",
    imagem: "https://pbs.twimg.com/media/EZbWtuXXkAE4bS_.jpg",
    descricao: "São homens que sentem atração sexual/romântica por outros homens (ou seja, pelo mesmo gênero).",
    citacao:"Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar. (Alan Turring - Pai da ciência da computação e homem gay",
},


bio03:{
    nome: "Bissexuais",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bisexual_Pride_Flag.svg/1200px-Bisexual_Pride_Flag.svg.png",
    descricao: "São pessoas que sentem atração sexual/romântica por mais de um gênero. Devido ao sentido literal do termo bi, erroneamente indicam a bissexualidade como binária, contudo, é preciso entender que bissexuais também podem sentir atração, por exemplo, por não-bináries.",
    citacao:"Acho que ser natural e sincero é o que realmente importa. (Freddie Mercury - Cantor e compositor Bisexual",
},
bio04:{
    nome: "Transexuais",
    imagem: "https://pbs.twimg.com/media/Ea-UtzYXsAERZ8Q.jpg",
    descricao: "São pessoas que não se identificam com o gênero atribuído em seu nascimento, isto é, a transexualidade se refere à identidade de gênero oposta ao sexo físico biológico, utilizado tanto para identidades masculinas (transmasculino), quanto femininas (transfeminina).",
    citacao:"As pessoas devem poder viver a identidade que lhes parece mais cabível (Laerte Coutinho - Quadrinista e mulher transexual).",
},

bio05:{
    nome: "QUEER",
    imagem: "https://s2.glbimg.com/Ehe3iUeecIgTx6QD_R8xSUczy34=/e.glbimg.com/og/ed/f/original/2021/06/10/bandeira_queergender.png",
    descricao: "São pessoas que não se identificam com os padrões de heteronormatividade impostos pela sociedade e transitam entre os “gêneros”, sem necessariamente concordar com tais rótulos. A teoria queer defende que a orientação sexual e identidade de gênero não são resultado da funcionalidade biológica, mas de uma construção social.",
    citacao:"Abandonar a ideia de que eu tinha que ser normal ou que, de alguma forma, não era normal só porque precisava priorizar o cuidado pessoal para ser saudável é o maior presente que já me dei. Ser normal é ser completamente único, porque ninguém é igual. ( jonathan van ness - Cabeleleiro, Patinador, apresentador e pessoa não binária)",
},

bio06:{
    nome: "Intersexo",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Intersex_Pride_Flag.svg/2560px-Intersex_Pride_Flag.svg.png",
    descricao: "São pessoas que possuem variações biológicas não binárias. Isto é, a intersexualidade está relacionada às características sexuais biológicas, diferente da orientação sexual ou da identidade de gênero. Uma pessoa intersexo pode ser hétero, gay, lésbica, bissexual ou assexual, e pode se identificar como mulher, homem, ambos ou nenhum. Aplicado erroneamente, o termo hermafrodita era usado para descrever espécies e não para descrever indivíduos de uma espécie, além de ser errado utilizar o termo, é preconceituoso.",
    citacao:"Ser intersexual é uma parte de quem eu sou, assim como a cor do meu cabelo, ela sozinha não é capaz de me definir. Eu sou intersexual com orgulho. (Hanne Gaby Odiele - Modelo Belga intersexual)",
},

bio07:{
    nome: "Assexuais",
    imagem: "https://static.wixstatic.com/media/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png/v1/fill/w_640,h_384,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/473518_b61dec511cfd4fe7b09b92974527c9f2~mv2.png",
    descricao: "São pessoas com ausência total, parcial, condicional ou circunstancial de atração sexual. A assexualidade é um termo guarda-chuva que engloba arromânticos, românticos, homoromânticos, heteroromânticos, biromânticos, panromânticos, demissexuais, entre outros.",
    citacao:"⁠Eu vivo uma vida perfeitamente feliz e completa como uma mulher negra, assexual e arromântica. (Yasmin Benoit - Modelo e Assexual",
},

bio08:{
    nome: "Panssexuais",
    imagem: "https://static.significados.com.br/foto/flag-pansexuality-1192318-1920.png",
    descricao: "São pessoas que possuem atração sexual/romântica por pessoas independentemente do sexo ou gênero das mesmas. A diferença entre panssexualidade e bissexualidade está no contexto histórico, visto que surgiu como um movimento contrário à rejeição de pessoas trans ou não-binárias.",
    citacao:"Abrace todas as coisas que te fazem única, mesmo que isso possa deixar outras pessoas desconfortáveis. E, quando você estiver em dúvida, quando pensar em desistir, lembre-se de escolher sempre a liberdade em vez do medo. (Janelle Monáe - Cantora Panssexual)",
},

bio09:{
    nome: "+",
    imagem: "https://www.ofuxico.com.br/wp-content/uploads/2021/06/bandeira-do-orgulho-lgbtqia-1024x683.jpg",
    descricao: "O movimento LGBTQIAP+, é um movimento político que luta pelos direitos dos grupos que compõem a sua sigla, nesse diciónario foram comtempladas apenas alguns dos grupos que fazem parte da sigla, já que o + ao final da sigla ilustra a inclusão de novas sexualidades e identidades gênero que foram adicionadas ao longo do tempo para abarcar a diversidade de grupos que não se encaixam na heteronormatividade, e para que assim mais pessoas se sintam reconhecidas e acolhidas sendo quem elas são.",
    citacao:"“Você nunca tem completamente seus direitos, individualmente, até que todos tenham direitos.(Marsha P. Johnson - Mulher trans, drag queen, ativista e trabalhadora do sexo) .",
},

};

var content = document.getElementById("content");

    for( var bio in biografias){
       content.innerHTML += 
       '<div class="card">' +
        '<img src="' + 
        biografias[bio].imagem + 
       '"/>' + 
       "<details>" + 
       "<summary>" +  
       biografias[bio].nome + 
       "</summary>" + 
       "<p>" 
       + biografias[bio].descricao +  
       "</p>" +  
       "<blockquote><q>"  +
        biografias[bio].citacao + 
        "</q></blockquote>" + 
       "</details></div>";
       
    }

};

carregaDicionario();