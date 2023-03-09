function generateImage() {
    // DECLARAÇÃO DE VARIÁVEIS
    const name = document.getElementById("name").value;
    const cargo = document.getElementById("cargo").value;
    const unidade = document.getElementById("unidade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const canvas = document.getElementById("canvas");
    const container = document.querySelector('.container-img');

    const imagem = new Image();
    // imagem.src = 'https://kpe.com.br/wp-content/uploads/2023/03/Assinatura-Kpe-Selos.png';
    imagem.src = './Assinatura-Kpe-Selos.png';
    imagem.addEventListener('load', () => {
        // Desenha a imagem no canvas

        // LARGURA E ALTURA DO CANVAS
        canvas.width = 2000;
        canvas.height = 899;

        const ctx = canvas.getContext("2d");

        //DEFINIDO TAMANHO E COR 
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // SAÍDA DO INPUT NOME
        ctx.font = "700 100px Open Sans";
        ctx.fillStyle = "#8d3996";
        ctx.fillText(`${name}`, 40, 150);

        // SAÍDA DO INPUT CARGO
        ctx.font = "55px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${cargo}`, 40, 220);

        // SAÍDA DO INPUT UNIDADE
        ctx.font = "55px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${unidade}`, 40, 290);

        // SAÍDA DO INPUT EMAIL
        ctx.font = "55px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${email} | ${telefone}`, 40, 350);

        // SAÍDA DO INPUT TELEFONE
        //ctx.font = "55px Open Sans";
        //ctx.fillStyle = "#333333";
        //ctx.fillText(`| ${telefone}`, 710, 350);

        ctx.drawImage(imagem, 0, 370, 2000, 493);

        // CONVERTENDO O CANVA EM IMAGEM
        const dataURL = canvas.toDataURL();
        const img = new Image();
        img.classList.add('img-ass');
        img.src = dataURL;
        img.height = 400;
        container.appendChild(img);

        // GERANDO LINK PARA DOWNLOAD
        /* const downloadLink = document.createElement('a');
         downloadLink.href = dataURL;
         downloadLink.download = 'assinatura.png'; 
 
         // ADICIONA O LINK DE DOWNLOAD NA PÁGINA E AO CLICAR O DOWNLOAD É INICIADO AUTOMATICAMENTE
         document.body.appendChild(downloadLink);
         downloadLink.click();*/
    });

    // cria o elemento do botão de download
    const downloadBtn = document.createElement("button");
    downloadBtn.classList.add('bntDownload');
    downloadBtn.innerHTML = "Download da Imagem";

    // adiciona o ouvinte de evento para o botão
    downloadBtn.addEventListener("click", () => {
        // cria um elemento de link temporário para o download da imagem
        const link = document.createElement("a");
        link.download = "assinaturaKPE.png";
        link.href = canvas.toDataURL();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // adiciona o botão à página HTML
    container.appendChild(downloadBtn);
}