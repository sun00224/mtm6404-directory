
function list (clients) {
  return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance}</strong>
    </li>
  `).join('')
}

function order (clients, property) {
  if (property === 'name') {
    return clients.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return clients.sort((a, b) => a[property] - b[property])
  }
}

function total (clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0)
}

function info (index) {
  return clients.find(client => client.index === index)
}

function search (query) {
  return clients.filter(client =>
    client.name.toLowerCase().includes(query.toLowerCase())
  )
}
  