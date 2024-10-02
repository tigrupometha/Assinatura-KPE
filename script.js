function generateImage() {
    // DECLARAÇÃO DE VARIÁVEIS
    const name = document.getElementById("name").value;
    const cargo = document.getElementById("cargo").value;
    const unidade = document.getElementById("unidade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const canvas = document.getElementById("canvas");
    const container = document.querySelector('.container-img');

    // Carrega a imagem do selo/logo
    const imagem = new Image();
    imagem.src = './Assinatura-Kpe-Selos.png'; // Certifique-se que o caminho da imagem está correto
    imagem.addEventListener('load', () => {
        // Define as dimensões do canvas
        canvas.width = 500; // Largura ideal para assinaturas
        canvas.height = 150; // Altura ideal para assinaturas

        const ctx = canvas.getContext("2d");

        // Define o fundo branco
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // SAÍDA DO INPUT NOME (ajustado para o novo tamanho)
        ctx.font = "700 40px Segoe UI";
        ctx.fillStyle = "#8d3996";
        ctx.fillText(`${name}`, 20, 50);

        // SAÍDA DO INPUT CARGO (ajustado)
        ctx.font = "25px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${cargo}`, 20, 80);

        // SAÍDA DO INPUT UNIDADE (ajustado)
        ctx.font = "25px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${unidade}`, 20, 110);

        // SAÍDA DO INPUT EMAIL E TELEFONE (ajustado)
        ctx.font = "25px Open Sans";
        ctx.fillStyle = "#333333";
        ctx.fillText(`${email} | ${telefone}`, 20, 140);

        // Desenha a imagem do selo/logo ajustada
        ctx.drawImage(imagem, 320, 90, 160, 60); // Ajuste proporcional à nova largura do canvas

        // CONVERTENDO O CANVA EM IMAGEM
        const dataURL = canvas.toDataURL();
        const img = new Image();
        img.classList.add('img-ass');
        img.src = dataURL;
        img.height = 150;
        container.appendChild(img);

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
    });
}
