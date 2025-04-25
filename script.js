document.getElementById('cepForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const cep = document.getElementById('cep').value.trim();
  
    // Validação de 8 dígitos
    if (!/^\d{8}$/.test(cep)) {
      alert('CEP inválido. Digite exatamente 8 números.');
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
  
      if (data.erro) {
        alert('CEP não encontrado.');
        return;
      }
  
      document.getElementById('logradouro').value = data.logradouro || '';
      document.getElementById('uf').value = data.uf || '';
  
      alert(`CEP: ${data.cep}\nLogradouro: ${data.logradouro}\nUF: ${data.uf}`);
    } catch (error) {
      alert('Erro ao consultar o CEP.');
    }
  });
  