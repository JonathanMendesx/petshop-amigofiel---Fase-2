
// main.js - Phase 2 JavaScript functions
document.addEventListener('DOMContentLoaded', function(){
  // Simple form validation
  const form = document.getElementById('cadastroForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // Basic required fields check
      const nome = form.querySelector('[name=name]').value.trim();
      const email = form.querySelector('[name=email]').value.trim();
      const petName = form.querySelector('[name=pet_name]').value.trim();
      if(!nome || !email || !petName){
        alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Nome do Pet.');
        return;
      }
      // Show confirmation
      const serv = form.querySelector('[name=service]:checked') ? form.querySelector('[name=service]:checked').value : 'não selecionado';
      const agendamento = form.querySelector('[name=date]').value + ' ' + form.querySelector('[name=time]').value;
      alert('Agendamento confirmado:\nCliente: ' + nome + '\nPet: ' + petName + '\nServiço: ' + serv + '\nData/Hora: ' + agendamento);
      form.reset();
    });
  }

  // Simple live clock (função temporal)
  const clock = document.getElementById('liveClock');
  if(clock){
    setInterval(() => {
      const now = new Date();
      clock.textContent = now.toLocaleString();
    }, 1000);
  }
});
