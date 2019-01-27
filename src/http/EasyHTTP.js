
// Small library for making basic HTTP requests

class EasyHTTP {
// Make HTTP GET Request==============================
  static async get(url){
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  // Make HTTP POST Request============================
  static async post(url, data){

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json' 
        },
        body: JSON.stringify(data)
  });

  const resData = await response.json();
  return resData;
  }

  // Make HTTP PUT Request =============================
  static async put(url, data){
  const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
  const resData = await response.json();
  return resData;
  }

  // Make HTTP PATCH Request =============================
  static async patch(url, data){ // use for partial replacement of entry
  const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
  const resData = await response.json();
  console.log(resData)
  return resData;
  }

  // Make HTTP DELETE Request ==========================
  static async delete(url){
  const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json' 
      }
  });
  const resData = await 'resource deleted';
  return resData;
  }
}

export default EasyHTTP;