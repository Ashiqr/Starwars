export const getAll = async (page: string) => {
  const query = `{ listPeople(page: ${page}) { id, name, height, mass, gender, homeworld { name } }  }`;
  return await fetch('http://localhost:4000', 
        {method: 'POST', 
        headers: { 'Allow-Origin' : '*', 'Access-Control-Allow-Origin':	'*', 'Content-Type': 'application/json' },
        body: JSON.stringify({query})});
}

export const getAllWithDetails = async (page: string) => {
  const query = `{ listPeopleDetails(page: ${page}) { people { id, name, height, mass, gender, homeworld { name } }, count }  }`;
  return await fetch('http://localhost:4000', 
        {method: 'POST', 
        headers: { 'Allow-Origin' : '*', 'Access-Control-Allow-Origin':	'*', 'Content-Type': 'application/json' },
        body: JSON.stringify({query})});
}

export const searchByName = async (searchQuery: string) => {
  const query = `{ searchPeople(name: "${searchQuery}", page: 1) { people { id, name, height, mass, gender, homeworld { name }}, count }  }`;
  return await fetch('http://localhost:4000', 
        {method: 'POST', 
        headers: { 'Allow-Origin' : '*', 'Access-Control-Allow-Origin':	'*', 'Content-Type': 'application/json' },
        body: JSON.stringify({query})});
}
